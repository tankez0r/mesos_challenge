import { Field, ErrorMessage, useField } from "formik";


const CustomField =({inputType, name, placeholder, label, labelStyle, fieldStyle, as, accepts}) => {
const [field, meta, helpers] = useField(name)
const date = new Date().toLocaleDateString();
const {setValue} = helpers;
    return ( 
       <div className="grid grid-cols-12 my-5">
        <label className={labelStyle} htmlFor={name}>{label}</label>
  {inputType==='date'?  <input min={date} onChange={(e)=>{setValue(e.target.value)}}  className={fieldStyle} name={name} as={as} type={inputType} placeholder={placeholder}/>
  :
  <Field min={1} step={0.01} className={fieldStyle } name={name} as={as} type={inputType} placeholder={placeholder} accepts={accepts? accepts : "*"} />}
<ErrorMessage  name={name} render={(msg) => <span className="text-sm text-red-600 drop-shadow-sm shadow-white"> {msg} </span>}/>
</div>);
}
 
export default CustomField;