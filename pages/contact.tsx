// import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'
// import { Navbar } from '../components/Navbar'
import { MainLayout } from '../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout>

      <h1> Contact Page </h1>
          
          <h1 className={'title'}>
            Ir a <Link href="/">Contact</Link>
          </h1>
  
          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/contact.jsx</code>
          </p>

    </MainLayout>

  )
}
