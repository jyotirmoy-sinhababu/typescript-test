import { useState } from 'react';
import { Checkbox, FormGroup } from '@mui/material';

interface Department {
  department: string;
  sub_departments: string[];
}

const departmentData: Department[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];
const CheckBoxComp = () => {
  const [checkedData, setCheckedData] = useState();
};
export default CheckBoxComp;
