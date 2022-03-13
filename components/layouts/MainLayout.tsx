import styles from './MainLayout.module.css'
import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../Navbar'

export const MainLayout: FC = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>

              {children}
    
          </main>
    
        </div>
      )
}
