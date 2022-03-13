// import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'
// import styles from '../styles/Home.module.css'
// import { Navbar } from '../components/Navbar'

export default function PricingPage() {
  return (

      <>

        <h1> Pricing Page </h1>
        
        <h1 className={'title'}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing.jsx</code>
        </p>

      </>

  )
}

PricingPage.getLayout = function getLayout ( page:JSX.Element ) {

  return(
    <MainLayout>
      <DarkLayout>

        { page }

      </DarkLayout>
    </MainLayout>


  )
}
