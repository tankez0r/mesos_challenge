import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";
const Resultados = ({formik}) => {
    const split = formik?.fecha.split("-")
    const fecha = split? `${split[2]}-${split[1]}-${split[0]}` : null
    const { data, error } = useSWR(formik?`https://mindicador.cl/api/uf/${fecha}`: null, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
   
   
   
    const moneda = data.serie[0]? data.serie[0].valor : null;
    const monto = Math.ceil(moneda * formik.monto);
    
    
    
    return (   <div className={formik?"dark:text-white dark:bg-gray-600 bg-cyan-900 text-white shadow-cyan-900 p-2 rounded-md shadow-lg dark:shadow-slate-400" : "hidden"}>  
  { moneda?  (<><h3>{`Monto Conversión: UF $${formik.monto}`}</h3>

<h3>{`Fecha Conversión: ${fecha} `}</h3>
<h3>{`valor moneda $${moneda}`}</h3>
<h3>{console.log(moneda)}</h3>

<h3>{`Monto: $${monto} `}</h3></>) : <h3>No hay valores para esta fecha</h3> }
</div> );
}
 
export default Resultados;