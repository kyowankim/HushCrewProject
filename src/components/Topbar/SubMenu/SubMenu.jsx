import "./submenu.scss"

export default function SubMenu({subMenuOpen, setSubMenuOpen}) {
    return (
        <div className={"submenu " + (subMenuOpen && "active")}>
            <ul>
                <li onClick={()=>setSubMenuOpen(!subMenuOpen)} className="hush-boston">
                    <a href="https://www.instagram.com/hushcrew.bos/">Hush Crew Boston</a>
                </li>
                <li onClick={()=>setSubMenuOpen(!subMenuOpen)}>
                    <a href="https://www.instagram.com/hushcrew.la/">Hush Crew LA</a>
                </li>
            </ul>
        </div>
    )
}
