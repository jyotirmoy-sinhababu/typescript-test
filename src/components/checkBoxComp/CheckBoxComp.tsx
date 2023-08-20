import { useState, useRef } from 'react';
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
  const [isServiceDepChecked, setIsServiceDepChecked] = useState<boolean>();

  const [selectedDepartments, setSelectedDepartments] = useState<any>({
    service: [],
    design: [],
  });

  const checkRef = useRef<string>();

  //////////////////////////////////////

  const dataChecker = (dep: string, e: React.ChangeEvent<HTMLInputElement>) => {
    // let isChecked = true;
    // let filteredDepData = departmentData?.filter(
    //   (data) => data?.department === dep
    // );
    // filteredDepData[0]?.sub_departments?.map((data) => {
    //   if (
    //     dep === 'customer_service' &&
    //     !selectedDepartments?.service?.includes(data)
    //   ) {
    //     isChecked = false;
    //   }
    //   if (dep === 'design' && !selectedDepartments?.design?.includes(data)) {
    //     isChecked = false;
    //   }
    // });
    // setIsServiceDepChecked(isChecked);
    let isChecked = true;
    const data = { ...selectedDepartments };
  };

  ///////////////////////////////////////////
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
      // dataChecker(dep);
    }
    if (!isChecked && dep === 'customer_service') {
      let data = { ...selectedDepartments };
      data.service = [];
      setSelectedDepartments(data);
      // dataChecker(dep);
    }
    if (isChecked && dep === 'design') {
      let data = { ...selectedDepartments };
      data.design = subDep;
      setSelectedDepartments(data);
      // dataChecker(dep);
    }
    if (!isChecked && dep === 'design') {
      let data = { ...selectedDepartments };
      data.design = [];
      setSelectedDepartments(data);
      // dataChecker(dep);
    }
  };
  console.log(selectedDepartments);

  ////////////////////////////

  const handleSubCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    dep: string
  ) => {
    let value = e.target.value;
    // dataChecker(dep);
    if (checkRef.current == value && dep == 'customer_service') {
      let data = { ...selectedDepartments };
      if (data.service.includes(value)) {
        const filteredData = data.service.filter((item: string) => {
          return item != value;
        });
        data.service = filteredData;
      } else {
        data.service.push(value);
      }
      setSelectedDepartments(data);
    }
    if (checkRef.current == value && dep == 'design') {
      let data = { ...selectedDepartments };
      if (data.design.includes(value)) {
        const filteredData = data.design.filter((item: string) => {
          return item != value;
        });
        data.design = filteredData;
      } else {
        data.design.push(value);
      }
      setSelectedDepartments(data);
    }
  };

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
                          // department?.department == 'customer_service'
                          //   ? isServiceDepChecked
                          //   : isDesignChecked
                          isServiceDepChecked
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
                              department?.department === 'customer_service'
                                ? selectedDepartments?.service?.includes(subDep)
                                : selectedDepartments?.design?.includes(subDep)
                            }
                            value={subDep}
                            onChange={(e) => {
                              checkRef.current = e.target.value;
                              handleSubCategoryChange(e, department.department);
                            }}
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
