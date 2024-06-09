import React from 'react';
import { Select } from 'chakra-react-select';

const majors = [
  { label: 'Computer Science', value: 'Computer Science' },
  { label: 'Aerospace Engineering', value: 'Aerospace Engineering' },
  { label: 'Agribusiness', value: 'Agribusiness' },
  // Add more majors as needed
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
    />
  );
}
