import './App.scss'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Bigph from './components/bigph/Bigph'
import Products from './components/products/Products'

function App() {

  return (
    <div className='main'>

      <Header/>
      <Navbar/>
      <Bigph/>
      <Products/>

    </div>
  )
}

export default App
