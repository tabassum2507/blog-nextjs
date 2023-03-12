
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Format from "../../layout/Format.js"
import Section1 from '../../components/Section1'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Format >
        <Section1 />
      </Format>
    </div>
  )
}
