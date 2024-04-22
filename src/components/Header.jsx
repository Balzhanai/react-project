import {Link} from 'react-router-dom';
import logoIcon from '/Logo.png'
import cartIcon from '/shopping-cart 2.svg'


function Header () {
    return (
        <header className='header'>
            <div className="logo-container">
            <img src={logoIcon} alt="Логотип" className='logo'/>
            <p>QuickMeal</p>
            </div>

            <div className='Links'>
                <Link to='/'>Home</Link>
                <Link to='/categories'>All restaurants</Link>

                <button className='Link-btn'>
                    <img src={cartIcon} alt="Корзинка" />
                </button>
            </div>
        </header>
    )
}

export default Header;