import Image from 'next/image'
import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'



export default function Home() {
  return (
    <div>
        <Head>
          <title>Nikki Calamia | Software Engineer </title>
         <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" /> 
        </Head>

      <Navbar/>
      
      <Main/>
    </div>
  )
}

