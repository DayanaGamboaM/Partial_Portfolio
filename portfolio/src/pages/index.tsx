import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from 'next/head'
import Header from '../components/Header'
import Presentation from '../components/Presentation';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dayana Desarrolladora</title>
      </Head>
      <Header />
      <Presentation />
      <Projects />
      <CallToAction />
      <Footer />
      </>
  )
}

export default Index