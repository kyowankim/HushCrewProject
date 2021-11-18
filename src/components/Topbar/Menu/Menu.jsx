import "./menu.scss"
import {HashLink} from "react-router-hash-link"
import {Link} from "react-router-dom"

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <HashLink to="/#home">Home</HashLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <HashLink smooth to="/#aboutus">About Us</HashLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <HashLink smooth to="/#releases">Latest Releases</HashLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to="/faq">
                        FAQ
                    </Link>
                </li>
            </ul>
        </div>
    )
}
