
import CustomButton from "../componentes/FormComponents/CustomButton"
import { useState } from "react"
import ChangeForm from "../componentes/FormComponents/Changeform"
export default function Home() {
const [themeseted, setTheme] = useState({theme:'dark', icon:'sun.svg'})

const toggleTheme = ()=>{themeseted.theme === 'dark'?  setTheme({theme:'', icon:'moon.svg'}) : setTheme({theme:'dark', icon:'sun.svg'}) }
console.log(themeseted)
  return (

    <div className={themeseted.theme}>   
<div className="min-h-screen bg-blue-200 dark:bg-black grid grid-cols-12">
<div className="col-start-12 mt-10" ><CustomButton type="toggle" toggle={toggleTheme} icon={themeseted.icon}/></div>
<div className="row-start-2 col-start-1 col-span-12 grid grid-cols-12">
<ChangeForm/>
</div>

</div>
      </div>
  )
}
