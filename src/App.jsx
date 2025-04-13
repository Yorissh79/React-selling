import './App.scss'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Bigph from './components/bigph/Bigph'
import Products from './components/products/Products'
import Norph from './components/norph/Norph'
import Futureproduct from './components/futureproduct/Futureproduct'
import Aboutus from './components/aboutus/Aboutus'
import Teaml from './components/teaml/Teaml'
import Sbigph from './components/sbigph/Sbigph'
import Services from './components/services/Services'
import Testi from './components/testi/Testi'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='main'>

      <Header/>
      <Navbar/>
      <Bigph/>
      <Products/>
      <Norph/>
      <Futureproduct/>
      <Aboutus/>
      <Teaml/>
      <Sbigph/>
      <Services/>
      <Testi/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App
