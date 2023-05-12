import './header.css'
import userIcon from '@/assets/user-icon.svg'
import shoppingCart from '@/assets/shopping-cart.svg'
import menuIcon from '@/assets/menu-icon.svg'
import logo from '@/assets/SHIPPED-LOGO.png'

const Header = () => {
  return (
    <nav className='header'>
      <ul className='header__nav-list'>

        <li className='header__list-item'>
          <a href='/' className='header__logo'>
            <img src={logo} alt='logo' className='logo__img' />
          </a>
        </li>

        <li className='header__list-item'>
          <a href='/' className='list-item__link'>
            Home
          </a>
        </li>

        <li className='header__list-item'>
          <a href='/' className='list-item__link'>
            Shop
          </a>
        </li>

        <li className='header__list-item'>
          <a href='/' className='list-item__link'>
            Contact Us
          </a>
        </li>

      </ul>
      <ul className='header__nav-chars'>

        <li className='header-chars-item'>
          <a href='/'>
            <span className='chars-item__user-icon'>
              <img src={userIcon} alt='user-icon' className='chars-item__user-icon' />
            </span>
          </a>
        </li>

        <li className='header-chars-item'>
          <a href='/'>
            <span className=''>
              <img src={shoppingCart} alt='shopping-cart' className='chars_item__shopping-cart' />
            </span>
          </a>
        </li>

        {/* clasName='header-chars-item' Aqui ira el icono de menu en dispositivos >600px */}
        <li className='header-chars-item'>
          <a href='/'>
            <span className=''>
              <img src={menuIcon} alt='Menu' className='chars-item__menu-icon' />
            </span>
          </a>
        </li>

      </ul>
    </nav>
  )
}

export default Header
