import { Formik, Form } from "formik";
import CustomField from "./CustomField";
import CustomButton from "./CustomButton";
import Resultados from "./Resultados";
import { useState } from "react";


const ChangeForm = () => {
 const [formikValues, setFormikValues]= useState(null)
    const InputStyles = {labelCommons: "col-start-3 col-span-7 dark:text-white", inputCommons:"border-opacity-40 border border-black shadow-md col-start-2 "}


  return (
    <div className="col-span-8 col-start-3">  
    <Resultados formik={formikValues}/>
    <Formik className='col-span-12' onSubmit={values => {setFormikValues(values)} } initialValues={{monto:'', fecha: ''}}>
    {formik=>(

             <Form className="col-span-8 col-start-3">
               <CustomField inputType='number' fieldStyle='col-span-8 col-start-3' as="input" name="monto" label="UF"   labelStyle={InputStyles.labelCommons}/>
               <CustomField fieldStyle='col-span-8 col-start-3'  as="datetime-locale" inputType="date" name="fecha" label="CLP"  labelStyle={InputStyles.labelCommons} />
            <div className="grid grid-cols-12">

            <CustomButton text='Transformar' type="submit"/>

          </div>
             </Form>
           
      )}
    </Formik>
    </div> );
}

export default ChangeForm;