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

# Convert DataFrame to JSON list and save to file
courses_json = all_courses_df.to_json(orient='records')

with open('coursesData.json', 'w') as f:
    f.write(courses_json)

print("Courses data saved to coursesData.json")
