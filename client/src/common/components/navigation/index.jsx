import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "../buttons/Link.jsx"
import './styles/Navbar.scss'
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faArrowTrendUp} from "@fortawesome/free-solid-svg-icons/faArrowTrendUp"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
const Navbar=()=>{
    const Items=[
        {
            id:1,
            name:"Home",
            icon:faHome,
            route:'/'
        },
        {
            id:2,
            name:"Trending",
            icon:faArrowTrendUp,
            route:'/trending'
        },
        // {
        //     id:3,
        //     name:"Search",
        //     icon:faMagnifyingGlass,
        //     route:'/search'
        // }
    ]
    return (
        <nav className="nav">
            <div className="nav__items">
            {Items.map(item => (
                <NavLink key={item.id} className="nav__items__link" to={item.route}>
                    <FontAwesomeIcon className={"nav__items__link__icon"} icon={item.icon} />
                    <span>{item.name}</span>
                </NavLink>
            ))}
            </div>
            <div className="nav__options">
                <button type={"button"} className="nav__options__btn">
                    Select Region
                </button>
            </div>
        </nav>
    )
}
export default Navbar;