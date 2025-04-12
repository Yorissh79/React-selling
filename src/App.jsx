import './App.scss'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Bigph from './components/bigph/Bigph'
import Products from './components/products/Products'
import Norph from './components/norph/Norph'
import Futureproduct from './components/futureproduct/Futureproduct'
import Aboutus from './components/aboutus/Aboutus'
import Teaml from './components/teaml/Teaml'

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

    </div>
  )
}

export default App
