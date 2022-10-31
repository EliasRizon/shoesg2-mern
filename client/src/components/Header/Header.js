import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Header.module.scss'
import decode from 'jwt-decode'

const cn = classNames.bind(styles)

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const location = useLocation()

  // useEffect(() => {
  //   const token = user?.token

  //   if (token) {
  //     const decodedToken = decode(token)

  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout()
  //   }

  //   setUser(JSON.parse(localStorage.getItem('profile')))
  // }, [location])

  return (
    <header className={cn('header')}>
      <div className={cn('header-nav')}>
        <a className={cn('logo-link')} href="/">
          <div className={cn('logo-link-img')}></div>
        </a>
        <nav className={cn('header__navbar')}>
          <div className={cn('header-nav-list')}>
            <ul className={cn('header__navbar-list')}>
              <li className={cn('header__navbar-item')}>
                <a href="/" className={cn('header__navbar-item-link')}>
                  <b>CỬA HÀNG</b>
                </a>
              </li>
              <li className={cn('header__navbar-item')}>
                <a href="/" className={cn('header__navbar-item-link')}>
                  <b>HỖ TRỢ</b>
                </a>
              </li>
              <li className={cn('header__navbar-item')}>
                <a href="/" className={cn('header__navbar-item-link')}>
                  <b>TIN TỨC</b>
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{ textAlign: 'center' }}
            className={cn('header__navbar-item', 'account-btn')}
          >
            <a
              style={{ color: 'var(--title-text-color)' }}
              href="/auth"
              className={cn(
                'header__navbar-item-link',
                'header__navbar-item-link-account',
              )}
            >
              <b>ĐĂNG NHẬP</b>
            </a>
            <ul className={cn('header_account-list')}>
              <li>
                <a className={cn('header_account-list-link')} href="/">
                  TÀI KHOẢN CỦA TÔI
                </a>
              </li>
              <li>
                <a className={cn('header_account-list-link')} href="/">
                  ĐƠN MUA
                </a>
              </li>
              <li>
                <a className={cn('header_account-list-link')} href="/">
                  ĐĂNG XUẤT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
