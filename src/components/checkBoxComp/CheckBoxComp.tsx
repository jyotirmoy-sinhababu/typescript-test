import { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  const [isServiceDepChecked, setIsServiceDepChecked] =
    useState<boolean>(false);
  const [isDesignChecked, setIsDesignChecked] = useState<boolean>(false);

  const [selectedDepartments, setSelectedDepartments] = useState<any>({
    service: [],
    design: [],
  });

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    dep: string,
    subDep: string[] | string
  ) => {
    let isChecked = e.target.checked;
    if (isChecked && dep === 'customer_service') {
      let data = { ...selectedDepartments };
      data.service = subDep;
      setSelectedDepartments(data);
      !isServiceDepChecked
        ? setIsServiceDepChecked(true)
        : setIsServiceDepChecked(false);
    }
    if (!isChecked && dep === 'customer_service') {
      let data = { ...selectedDepartments };
      data.service = [];
      setSelectedDepartments(data);
      !isServiceDepChecked
        ? setIsServiceDepChecked(true)
        : setIsServiceDepChecked(false);
    }
    if (isChecked && dep === 'design') {
      let data = { ...selectedDepartments };
      data.design = subDep;
      setSelectedDepartments(data);
      !isDesignChecked ? setIsDesignChecked(true) : setIsDesignChecked(false);
    }
    if (!isChecked && dep === 'design') {
      let data = { ...selectedDepartments };
      data.design = [];
      setSelectedDepartments(data);
      !isDesignChecked ? setIsDesignChecked(true) : setIsDesignChecked(false);
    }
  };
  console.log(selectedDepartments);

  return (
    <div>
      <FormGroup>
        {departmentData?.map((department, index: number) => {
          return (
            <div key={index}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          department?.department == 'customer_service'
                            ? isServiceDepChecked
                            : isDesignChecked
                        }
                        onChange={(e) => {
                          handleCheckboxChange(
                            e,
                            department.department,
                            department.sub_departments
                          );
                        }}
                      />
                    }
                    label={department?.department}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  {department?.sub_departments?.map((subDep) => (
                    <div key={subDep}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              department?.department == 'customer_service'
                                ? isServiceDepChecked
                                : isDesignChecked
                            }
                          />
                        }
                        label={subDep}
                      />
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </FormGroup>
    </div>
  );
};
export default CheckBoxComp;
