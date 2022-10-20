'use strict'

import classNames from 'classnames/bind'
import styles from './SearchBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const cn = classNames.bind(styles)

function SearchBar() {
  return (
    <div className={cn('grid', 'sticky')}>
      <div className={cn('header-search-bar')}>
        <form action="/search" class={cn('search-bar')}>
          <FontAwesomeIcon
            className={cn('search-icon')}
            icon={faMagnifyingGlass}
          />
          <input
            name="q"
            spellcheck="false"
            type="text"
            class={cn('search-bar-input')}
            placeholder="Tìm Kiếm Sản Phẩm"
          />
        </form>
        <ul class={cn('header-search-nav-list')}>
          <li class={cn('header__search-nav-item')}>
            <a href="/" class={cn('header__search-nav-item-link')}>
              <b>Khám Phá</b>
            </a>
          </li>
          <li class={cn('header__search-nav-item')}>
            <a href="/" class={cn('header__search-nav-item-link')}>
              <b>Hàng Mới</b>
            </a>
          </li>
          <li class={cn('header__search-nav-item')}>
            <a href="/" class={cn('header__search-nav-item-link')}>
              <b>Hàng Giảm Giá</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SearchBar
