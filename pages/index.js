import Image from 'next/image'
import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import {useState} from 'react'


export default function Home() {


  return (
    <div>
        <Head>
          <title>Nikki Calamia | Software Engineer </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" /> 
        </Head>
      <Navbar/>
      <Main />
      <About/>
      <Skills/>
      <Projects/>
      <Contact />
    </div>
  )
}

