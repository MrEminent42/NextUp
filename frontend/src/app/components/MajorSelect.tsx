import React from 'react';
import { Select, chakraComponents } from 'chakra-react-select';

const majors = [
  { label: 'Aerospace Engineering', value: 'Aerospace Engineering' },
  { label: 'Agricultural Business', value: 'Agricultural Business' },
  { label: 'Agricultural Communication', value: 'Agricultural Communication' },
  { label: 'Agricultural Science', value: 'Agricultural Science' },
  { label: 'Agricultural Systems Management', value: 'Agricultural Systems Management' },
  { label: 'Animal Science', value: 'Animal Science' },
  { label: 'Anthropology and Geography', value: 'Anthropology and Geography' },
  { label: 'Architectural Engineering', value: 'Architectural Engineering' },
  { label: 'Architecture', value: 'Architecture' },
  { label: 'Art and Design', value: 'Art and Design' },
  { label: 'Biochemistry', value: 'Biochemistry' },
  { label: 'Biological Sciences', value: 'Biological Sciences' },
  { label: 'Biomedical Engineering', value: 'Biomedical Engineering' },
  { label: 'BioResource and Agricultural Engineering', value: 'BioResource and Agricultural Engineering' },
  { label: 'Business Administration', value: 'Business Administration' },
  { label: 'Chemistry', value: 'Chemistry' },
  { label: 'Child Development', value: 'Child Development' },
  { label: 'City and Regional Planning', value: 'City and Regional Planning' },
  { label: 'Civil Engineering', value: 'Civil Engineering' },
  { label: 'Communication Studies', value: 'Communication Studies' },
  { label: 'Comparative Ethnic Studies', value: 'Comparative Ethnic Studies' },
  { label: 'Computer Engineering', value: 'Computer Engineering' },
  { label: 'Computer Science', value: 'Computer Science' },
  { label: 'Construction Management', value: 'Construction Management' },
  { label: 'Dairy Science', value: 'Dairy Science' },
  { label: 'Economics', value: 'Economics' },
  { label: 'Electrical Engineering', value: 'Electrical Engineering' },
  { label: 'English', value: 'English' },
  { label: 'Environmental Earth and Soil Sciences', value: 'Environmental Earth and Soil Sciences' },
  { label: 'Environmental Engineering', value: 'Environmental Engineering' },
  { label: 'Environmental Management and Protection', value: 'Environmental Management and Protection' },
  { label: 'Food Science', value: 'Food Science' },
  { label: 'Forest and Fire Sciences', value: 'Forest and Fire Sciences' },
  { label: 'General Engineering', value: 'General Engineering' },
  { label: 'Graphic Communication', value: 'Graphic Communication' },
  { label: 'History', value: 'History' },
  { label: 'Industrial Engineering', value: 'Industrial Engineering' },
  { label: 'Industrial Technology and Packaging', value: 'Industrial Technology and Packaging' },
  { label: 'Interdisciplinary Studies', value: 'Interdisciplinary Studies' },
  { label: 'Journalism', value: 'Journalism' },
  { label: 'Kinesiology', value: 'Kinesiology' },
  { label: 'Landscape Architecture', value: 'Landscape Architecture' },
  { label: 'Liberal Arts and Engineering Studies', value: 'Liberal Arts and Engineering Studies' },
  { label: 'Liberal Studies', value: 'Liberal Studies' },
  { label: 'Manufacturing Engineering', value: 'Manufacturing Engineering' },
  { label: 'Marine Sciences', value: 'Marine Sciences' },
  { label: 'Materials Engineering', value: 'Materials Engineering' },
  { label: 'Mathematics', value: 'Mathematics' },
  { label: 'Mechanical Engineering', value: 'Mechanical Engineering' },
  { label: 'Microbiology', value: 'Microbiology' },
  { label: 'Music', value: 'Music' },
  { label: 'Nutrition', value: 'Nutrition' },
  { label: 'Philosophy', value: 'Philosophy' },
  { label: 'Physics', value: 'Physics' },
  { label: 'Plant Sciences', value: 'Plant Sciences' },
  { label: 'Political Science', value: 'Political Science' },
  { label: 'Public Health', value: 'Public Health' },
  { label: 'Psychology', value: 'Psychology' },
  { label: 'Recreation, Parks, and Tourism Administration', value: 'Recreation, Parks, and Tourism Administration' },
  { label: 'Sociology', value: 'Sociology' },
  { label: 'Software Engineering', value: 'Software Engineering' },
  { label: 'Spanish', value: 'Spanish' },
  { label: 'Statistics', value: 'Statistics' },
  { label: 'Theatre Arts', value: 'Theatre Arts' },
  { label: 'Wine and Viticulture', value: 'Wine and Viticulture' },
];

type MajorSelectProps = {
  onChange: (major: string) => void;
};

export default function MajorSelect({ onChange }: MajorSelectProps) {
  return (
    <Select
      options={majors}
      placeholder="Select Major"
      onChange={(selectedOption) => onChange(selectedOption?.value || '')}
      chakraStyles={{
        control: (provided) => ({
          ...provided,
          width: '100%', // Ensure full width
          minWidth: '200px',
          maxWidth: '300px',
        }),
        menu: (provided) => ({
          ...provided,
          width: '100%', // Ensure full width
          minWidth: '200px',
          maxWidth: '300px',
        }),
        singleValue: (provided) => ({
          ...provided,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '280px', // Ensure the text is ellipsized if too long
        }),
      }}
      components={{
        SingleValue: ({ children, ...props }) => (
          <chakraComponents.SingleValue {...props}>
            <div title={children}>{children}</div>
          </chakraComponents.SingleValue>
        ),
      }}
    />
  );
}
