import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import { Inter } from 'next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}
