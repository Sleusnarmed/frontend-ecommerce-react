import './header.css'
import searchIcon from '@/assets/search-icon.svg'
import userIcon from '@/assets/user-icon.svg'
import shoppingCart from '@/assets/shopping-cart.svg'

const Header = () => {
  return (
    <nav className='header'>
      <a href='/' className='header__logo'>SHIPPED.com</a>
      <ul className='header__nav-list'>

        <li className='header__list-item'>
          Home
        </li>

        <li className='header__list-item'>
          Shop
        </li>

        <li className='header__list-item'>
          Contact Us
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

        <li className='header__chars-item'>
          <a href='/'>
            <span>
              <img src={searchIcon} alt='search-bar' className='chars_item__search-icon' />
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

        <li className='header-chars-item'>
          <a href='/'>
            <span>
              <img src='' alt='' />
            </span>
          </a>
        </li>

      </ul>
    </nav>
  )
}

export default Header
