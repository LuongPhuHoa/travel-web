import Image from 'next/image'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Main from './components/home/main'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
