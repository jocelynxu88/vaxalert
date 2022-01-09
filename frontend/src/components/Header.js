import React from 'react';
import './Header.css';
import Logo from "./Logo.png";


const Header = () =>{

    return(
        <div>
            <nav>
            <div> 
                {/* <img alt="logo" className="vaxlogo" src="https://marsdd.com/wp-content/uploads/2020/12/Vaccine.jpg" /> */}
                <img src={Logo} className="vaxlogo"/>
            </div>
        </nav>
        </div>
        
    )
}

export default Header;