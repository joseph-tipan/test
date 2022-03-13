// import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
// import { Navbar } from '../components/Navbar'
// import styles from '../styles/Home.module.css'


export default function HomePage() {
  return (
    <MainLayout>

      <h1> About Page </h1>
        <h1 className={'title'}>
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.jsx</code>
        </p>

    </MainLayout>
  )
}
