import '../styles/globals.scss'
import 'antd/dist/antd.css'



function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (

      <Component {...pageProps} />

  )
}

export default MyApp

