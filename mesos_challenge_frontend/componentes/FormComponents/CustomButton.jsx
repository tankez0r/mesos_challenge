import Image from "next/image";

const CustomButton = ({type, toggle, icon, customStyle, text}) => {

    const buttonClases = {
        submit:"bg-yellow-400 mb-7 rounded-lg shadow-md shadow-yellow-800 transition-all active:translate-y-1 col-span-5 col-start-3",
        reset: "bg-green-700 mb-7  rounded-lg shadow-lg shadow-green-900 text-white transition-all active:translate-y-1 ",
        theme:" bg-black dark:bg-white text-white px-1  rounded-full shadow-md shadow-red-white"
      };
if (type ==="submit"){
    return( <button type={"submit"} className={buttonClases.submit}>{text}</button>)
} 
else if(type==='toggle') {
    return ( <button onClick={toggle} type={"toggle"} className={buttonClases.theme + customStyle}><Image className="active:translate-y-1 transition-all" src={`/iconos/${icon}`} alt="theme" width={19} height={29}/></button>)
}
    
}
 
export default CustomButton;