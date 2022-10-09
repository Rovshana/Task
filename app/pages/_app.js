import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../i18n"
import Layout from '../components/Layout/Layout'
import "../styles/Sidebar.css";
function MyApp({ Component, pageProps }) {
  
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
