import re
import requests
from bs4 import BeautifulSoup
import pandas as pd

# Function to extract course details
def extract_course_details(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    courses = []
    for div in soup.find_all('div', class_='courseblock'):
        title_block = div.find('p', class_='courseblocktitle').text.strip()
        title = title_block[:title_block.find('\n')]

        prefix = title.split()[0]
        number = title.split()[1].replace('.', '')
        course_title = ' '.join(title.split()[2:]).replace('.', '')

        units = div.find('span').text
        units = units.split()[0]

        # Extract description
        description = ""
        desc_block = div.find('div', class_='courseblockdesc')
        if desc_block:
            paragraphs = desc_block.find_all('p')
            description_parts = [p.get_text().strip() for p in paragraphs if not p.get_text().strip().startswith('Prerequisite')]
            description = ' '.join(description_parts)

        # Extract prerequisites
        prerequisites = "None"
        prereq_div = div.find('div', class_='noindent courseextendedwrap')
        if prereq_div:
            prereq_texts = prereq_div.find_all('p')
            for p in prereq_texts:
                if 'Prerequisite' in p.get_text():
                    prerequisites = p.get_text().replace('Prerequisite:', '').strip()
                    break

        courses.append({
            'id': f"{prefix}{number}",
            'title': course_title,
            'description': description.strip(),
            'units': units,
            'prerequisites': prerequisites,
            'completed': False
        })

    return courses

def extract_course_codes(text):
    # Use regular expression to find course codes
    course_codes = re.findall(r'[A-Z]+(?:/[A-Z]+)?\s?\d{3}', text)
    no_space_codes = [code.replace(' ', '') for code in course_codes]  # Remove spaces from each extracted code
    return no_space_codes

def clean_course_codes(courses):
    # Clean extracted course codes and remove all types of whitespace
    cleaned_courses = []
    for course in courses:
        # Using regex to replace all whitespace characters
        cleaned_course = re.sub(r'\s+', '', course)  # This removes all kinds of whitespace
        cleaned_courses.append(cleaned_course)
    return cleaned_courses

def parse_prerequisites(prereq_str):
    def split_and_strip(items, delimiter):
        return [item.strip() for item in items.split(delimiter) if item.strip()]

    if ';' in prereq_str:
        before_semicolon, after_semicolon = prereq_str.split(';', 1)
    else:
        before_semicolon = prereq_str
        after_semicolon = ''

    # Process prerequisites before the semicolon
    before_parts = []
    temp_parts = split_and_strip(before_semicolon, ' or ')
    for part in temp_parts:
        if ' and ' in part:
            and_parts = split_and_strip(part, ' and ')
            combined_and_parts = []
            for and_part in and_parts:
                combined_and_parts += clean_course_codes(extract_course_codes(and_part))
            before_parts.append(combined_and_parts)
        else:
            before_parts.append(clean_course_codes(extract_course_codes(part)))

    # Process prerequisites after the semicolon
    after_parts = []
    after_semicolon = after_semicolon.strip()
    if after_semicolon.startswith('and'):
        after_semicolon = after_semicolon[3:].strip()
        temp_parts = split_and_strip(after_semicolon, ' or ')
        for part in temp_parts:
            after_parts.append(clean_course_codes(extract_course_codes(part)))

    # Combine prerequisites from before and after the semicolon
    combined_lists = []
    for before_part in before_parts:
        if after_parts:
            for after_part in after_parts:
                combined_lists.append(before_part + after_part)
        else:
            combined_lists.append(before_part)  # Handle cases without after semicolon

    return combined_lists

def filter_combined_lists(combined_lists):
    # Remove duplicates and standalone 'after_semicolon' entries
    unique_lists = []
    for lst in combined_lists:
        if lst not in unique_lists and len(lst) > 0:
            unique_lists.append(lst)
    return unique_lists

def apply_parsing_and_filtering(prereq_str):
    if pd.isna(prereq_str):
        return []
    parsed = parse_prerequisites(prereq_str)
    filtered = filter_combined_lists(parsed)
    return filtered

def format_prerequisite_statements(row):
    course_id = row['id']  # This retrieves the course ID from the DataFrame
    prerequisites_list = row['parsed_prereq']  # This retrieves the parsed prerequisites
    formatted_statements = []

    # Iterate through the list of prerequisites
    for prereq_group in prerequisites_list:
        # Format the prerequisite list into a string
        prereq_str = ', '.join(f'"{item}"' for item in prereq_group)  # Format each item in quotes and separate by commas
        statement = f'prerequisite("{course_id}", [{prereq_str}]).'
        formatted_statements.append(statement)

    return formatted_statements

# Base URL for the catalog
base_url = "https://catalog.calpoly.edu/coursesaz/"

# Fetch the main catalog page
response = requests.get(base_url)
soup = BeautifulSoup(response.content, "html.parser")

# Extract department links
departments = []
tables = soup.find_all("table")
for table in tables:
    for link in table.find_all('a', class_='sitemaplink'):
        department_name = link.text.split(" (")[0]
        department_link = link.get('href')
        departments.append((department_name, department_link))

# Create a pandas dataframe
df_department = pd.DataFrame(departments, columns=['Department', 'Link'])

# Dictionary to store course data for each department
all_courses = []

# Loop through the departments and extract course data
for index, row in df_department.iterrows():
    full_url = "https://catalog.calpoly.edu" + row['Link']
    print(f"Fetching courses for {row['Department']} from {full_url}")
    courses = extract_course_details(full_url)
    all_courses.extend(courses)

# Convert list of dictionaries to DataFrame
all_courses_df = pd.DataFrame(all_courses)

# Apply the function across the DataFrame to create a new column
all_courses_df['parsed_prereq'] = all_courses_df['prerequisites'].apply(apply_parsing_and_filtering)
all_courses_df['prerequisite_statements'] = all_courses_df.apply(format_prerequisite_statements, axis=1)

# Open a text file to write
with open('prerequisite_statements.txt', 'w') as file:
    # Iterate through each row in the DataFrame
    for index, row in all_courses_df.iterrows():
        # Each course may have multiple prerequisite statements
        for statement in row['prerequisite_statements']:
            file.write(statement + '\n')  # Write each statement on a new line