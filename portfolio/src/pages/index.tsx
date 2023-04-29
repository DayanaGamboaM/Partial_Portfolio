import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Header from '../components/Header'
import Presentation from '../components/Presentation';
const Index: React.FC = () => {
  return (
      <Head>
        <title>Dayana Desarrolladora Web</title>
      <Header />
      <Presentation />
      </Head>
  )
}

export default Index