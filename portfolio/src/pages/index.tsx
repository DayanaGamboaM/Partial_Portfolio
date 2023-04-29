import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Header from '../components/Header'
import Presentation from '../components/Presentation';
import CallToAction from '@/components/CallToAction';
const Index: React.FC = () => {
  return (
      <Head>
        <title>Dayana Desarrolladora Web</title>
      <Header />
      <Presentation />
      <CallToAction />
      </Head>
  )
}

export default Index