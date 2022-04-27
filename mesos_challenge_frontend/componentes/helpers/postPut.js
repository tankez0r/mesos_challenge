import { getFormData } from "./objectToForm";

export const fetchPostPut = async (formik, method) => {
    const resultado = getFormData(formik)
    const id = formik.id.toString()
¿
const res = await fetch(`https://mindicador.cl/api/uf`).then(res => res.json());



try {
    console.log(res)
} catch (error) {
    console.log(error)
}
}