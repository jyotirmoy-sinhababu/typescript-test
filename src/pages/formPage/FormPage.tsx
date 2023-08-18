import FormComp from '../../components/formComp/FormComp';

const FormPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: '10%',
        gap: '25px',
      }}
    >
      <FormComp />
    </div>
  );
};

export default FormPage;
