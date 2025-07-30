import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import Sumdemo from "./Sumdemo"
import Elementdemo from "./Elementdemo"
import Counter from "./Counter"
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom"
function App(){
  return (<div>
    <h1>Hello React</h1>
    <Router>
      <Link to='./home'>Home</Link>
      <Link to='./about'>About</Link>
      <Link to='./contact'>Contact</Link>
      <Link to='./counter'>Counter</Link>
      <Link to='./sumdemo'>Sumdemo</Link>
      <Link to='./elementdemo'>Elementdemo</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/sumdemo' element={<Sumdemo/>}/>
        <Route path='/elementdemo' element={<Elementdemo/>}/>
        <Route path='/cake/surat' element={<h1>Surat cake</h1>}/>
        <Route path='/cake/rajkot' element={<h1>Rajkot cake</h1>}/>
        <Route path='*' element={<h1>404 File Not Found</h1>}/>
      </Routes>
    </Router>
    
  </div>);
}
export default App;