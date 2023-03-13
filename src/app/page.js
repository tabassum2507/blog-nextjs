
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Format from "../../layout/Format.js"
import Section1 from '../../components/Section1'
import Section2 from '../../components/Section2'
import Section3 from '../../components/Section3'
import Section4 from '../../components/Section4'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Format >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Format>
    </div>
  )
}
