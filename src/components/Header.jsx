import logoIcon from '/Logo.png'
import cartIcon from './shopping-card.png'


function Header () {
    return (
        <Header>
            <img src={logoIcon} alt="Логотип" />

            <div>
                <link to='/'>Home</link>
                <link to='/categories'>All restaurants</link>

                <button>
                    <img src={cartIcon} alt="Корзинка" />
                </button>
            </div>
        </Header>
    )
}

export default Header;