import classNames from 'classnames/bind'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { LOGOUT } from '~/constants/actionTypes'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

const cn = classNames.bind(styles)

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const location = useLocation()
  const dispatch = useDispatch()

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT })
    setUser(null)
  }, [dispatch])

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location, user?.token, logout])

  return (
    <header className={cn('header')}>
      <div className={cn('header-nav')}>
        <Link className={cn('logo-link')} to="/">
          <div className={cn('logo-link-img')}></div>
        </Link>
        <nav className={cn('header__navbar')}>
          <div className={cn('header-nav-list')}>
            <ul className={cn('header__navbar-list')}>
              <li className={cn('header__navbar-item')}>
                <Link to="/" className={cn('header__navbar-item-link')}>
                  <b>CỬA HÀNG</b>
                </Link>
              </li>
              <li className={cn('header__navbar-item')}>
                <Link to="/" className={cn('header__navbar-item-link')}>
                  <b>HỖ TRỢ</b>
                </Link>
              </li>
              <li className={cn('header__navbar-item')}>
                <Link to="/" className={cn('header__navbar-item-link')}>
                  <b>TIN TỨC</b>
                </Link>
              </li>
            </ul>
          </div>
          <div
            style={{ textAlign: 'center' }}
            className={cn('header__navbar-item', 'account-btn')}
          >
            {user?.result ? (
              <div
                style={{ color: 'var(--title-text-color)' }}
                className={cn(
                  'header__navbar-item-link',
                  'header__navbar-item-link-account',
                )}
              >
                <FontAwesomeIcon
                  className={cn('user-icon')}
                  icon={faUser}
                ></FontAwesomeIcon>
                <span className={cn('userName')}>
                  {user.result.firstName || user.result.name}
                </span>
              </div>
            ) : (
              <Link
                style={{ color: 'var(--title-text-color)' }}
                to="/auth"
                className={cn(
                  'header__navbar-item-link',
                  'header__navbar-item-link-account',
                )}
              >
                ĐĂNG NHẬP
              </Link>
            )}

            {user?.result && (
              <ul className={cn('header_account-list')}>
                {user?.result.role === 'admin' && (
                  <li>
                    <div className={cn('header_account-list-btn')}>
                      QUẢN LÝ SẢN PHẨM
                    </div>
                  </li>
                )}
                <li>
                  <div className={cn('header_account-list-btn')}>
                    TÀI KHOẢN CỦA TÔI
                  </div>
                </li>
                <li>
                  <div className={cn('header_account-list-btn')}>ĐƠN MUA</div>
                </li>
                <li>
                  <div
                    className={cn('header_account-list-btn')}
                    onClick={logout}
                  >
                    ĐĂNG XUẤT
                  </div>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
