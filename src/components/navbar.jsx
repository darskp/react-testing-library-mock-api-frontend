import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../../src/images/admin.png'
const Navbar = () => {
    let lists = [
        {
            "to": '/book',
            "name": 'Add Books'
        },
        {
            "to": '/books',
            "name": 'Book List'
        },   
    ]

    return (
        <div className='mainNav'>
            <div className='Navbar'>
                <div className="title">
                    <Link to="/"><img src={logo} height="40px" /></Link>
                </div>
                <div className="linkgrp">
                    <ul>
                        {lists.map((data,index) => <NavLink key={index} to={data.to} activeClassName="links active" className='links' alt={data.name}>{data.name}</NavLink>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;