
import './App.css'
import NavBar from './component/NavBar'
import Heros from './component/Heros'
import Faq from './component/Faq'
import Footer from './component/Footer'
import Insights from './component/Insights'
import Pricing from './component/Pricing'
import Stats from './component/Stats'
import Testimonial from './component/Testimonial'
function App() {

  return (
   <div className="bg-[url('/public/rose-petals.svg')] bg-cover">
    <NavBar/>
    <Heros/>
    <Insights/>
    <Stats/>
    <Pricing/>
    <Testimonial/>
    <Faq/>
    <Footer/>
   </div>
  )
}

export default App
