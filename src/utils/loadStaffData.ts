import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Member } from '../utils/types';

export const loadStaffData = (): Member[] => {
  const directory = path.join(process.cwd(), 'public', 'staff-list');
  const filenames = fs.readdirSync(directory).filter(file => file.endsWith('.yml'));
  const staff: Member[] = filenames.map(filename => {
    const filePath = path.join(directory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as Member;
  });
  console.log(staff);
  return staff;
};
