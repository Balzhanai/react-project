// import {link} from 'react-router-dom'; 8k (gzipped: 3.2k)
import logoIcon from '/Logo.png'
import cartIcon from '/shopping-cart 2.svg'


function Header () {
    return (
        <header className='header'>
            <div className="logo-container">
            <img src={logoIcon} alt="Логотип" className='logo'/>
            <p>QuickMeal</p>
            </div>

            <div className='links'>
                <link to='/'>Home</link>
                <link to='/categories'>All restaurants</link>

                <button className='link-btn'>
                    <img src={cartIcon} alt="Корзинка" />
                </button>
            </div>
        </header>
    )
}

export default Header;