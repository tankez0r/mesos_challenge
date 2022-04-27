export const processdata = (data) => {

    const { serie } = data;

    const dataMap = serie.map(sdata => { return { fecha: new Date(sdata.fecha).toLocaleDateString(), valor: sdata.valor } })
    console.log(dataMap)

}