import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Calculadora UF 🪙</title>
        <meta name="description" content="Calculadora UF meso Challenge" />
      </Head>

      <div className='min-h-screen'>
        <Component {...pageProps} />
      </div>


    </>)
}

export default MyApp
