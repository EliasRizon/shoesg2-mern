import classNames from 'classnames/bind'
import styles from './SearchBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

const cn = classNames.bind(styles)

function SearchBar() {
  return (
    <div className={cn('grid', 'sticky')}>
      <div className={cn('header-search-bar')}>
        <form action="/search" className={cn('search-bar')}>
          <FontAwesomeIcon
            className={cn('search-icon')}
            icon={faMagnifyingGlass}
          />
          <input
            name="q"
            spellCheck="false"
            type="text"
            className={cn('search-bar-input')}
            placeholder="Tìm Kiếm Sản Phẩm"
          />
        </form>
        <ul className={cn('header-search-nav-list')}>
          <li className={cn('header__search-nav-item')}>
            <a href="/" className={cn('header__search-nav-item-link')}>
              <b>Khám Phá</b>
            </a>
          </li>
          <li className={cn('header__search-nav-item')}>
            <a href="/" className={cn('header__search-nav-item-link')}>
              <b>Hàng Mới</b>
            </a>
          </li>
          <li className={cn('header__search-nav-item')}>
            <a href="/" className={cn('header__search-nav-item-link')}>
              <b>Hàng Giảm Giá</b>
            </a>
          </li>
        </ul>
      </div>
      <a href="/cart" className={cn('cart-btn')}>
        <FontAwesomeIcon
          className={cn('cart-btn-icon')}
          icon={faCartShopping}
        ></FontAwesomeIcon>
      </a>
    </div>
  )
}

export default SearchBar
