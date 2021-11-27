import "./App.scss"
import Topbar from "./components/Topbar/Topbar"
import Menu from "./components/Topbar/Menu/Menu"
import SubMenu from "./components/Topbar/SubMenu/SubMenu"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Contact from "./components/RouterLinks/Contact/Contact"
import Faq from "./components/RouterLinks/Faq/Faq"
import { useState} from "react"
import Mainpage from "./components/Mainpage/Mainpage"
import { ParallaxProvider } from 'react-scroll-parallax';




function App() {
  const [subMenuOpen,setSubMenuOpen] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <ParallaxProvider>
      <div className="App">
        <Router>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} subMenuOpen={subMenuOpen} setSubMenuOpen={setSubMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <SubMenu subMenuOpen={subMenuOpen} setSubMenuOpen={setSubMenuOpen} />
              <Routes>
                <Route exact path="/" element={<Mainpage/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/faq" element={<Faq/>}/>
              </Routes>
        </Router>
      </div>
      </ParallaxProvider>
  );
}

export default App;
