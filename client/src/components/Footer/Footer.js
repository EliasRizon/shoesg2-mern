/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareFacebook,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'

const cn = classNames.bind(styles)

function Footer() {
  const backtotop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer className={cn('footer')}>
      <div className={cn('grid__full-width')}>
        <ul className={cn('follow')}>
          <li style={{ paddingLeft: '0' }} className={cn('follow-items')}>
            <a href="/" className={cn('follow-items-link')}>
              <FontAwesomeIcon icon={faSquareFacebook}></FontAwesomeIcon>
            </a>
          </li>
          <li style={{ paddingLeft: '9px' }} className={cn('follow-items')}>
            <a href="/" className={cn('follow-items-link')}>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </li>
          <li className={cn('follow-items')}>
            <a href="/" className={cn('follow-items-link')}>
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a>
          </li>
          <div className={cn('backtotop-button')} onClick={backtotop}>
            <FontAwesomeIcon
              className={cn('backtotop-icon')}
              icon={faCaretUp}
            ></FontAwesomeIcon>
          </div>
        </ul>
        <div className={cn('grid__row')}>
          <div className={cn('grid__column-fooder')}>
            <h4 className={cn('footer-heading')}>Chăm Sóc Khách Hàng</h4>
            <ul className={cn('footer-list')}>
              <li className={cn('footer-list-items')}>
                <a href="/" className={cn('footer-list-items-link')}>
                  Trung Tâm Trợ Giúp
                </a>
              </li>
              <li className={cn('footer-list-items')}>
                <a href="/" className={cn('footer-list-items-link')}>
                  Hướng Dẫn Mua Hàng
                </a>
              </li>
              <li className={cn('footer-list-items')}>
                <a href="/" className={cn('footer-list-items-link')}>
                  Thanh Toán
                </a>
              </li>
              <li className={cn('footer-list-items')}>
                <a href="/" className={cn('footer-list-items-link')}>
                  Vẫn Chuyển
                </a>
              </li>
              <li className={cn('footer-list-items')}>
                <a href="/" className={cn('footer-list-items-link')}>
                  Chăm Sóc Khách Hàng
                </a>
              </li>
            </ul>
          </div>
          <div className={cn('grid__column-fooder')}>
            <h4 className={cn('footer-heading')}>Thông Tin Về ShoesG2</h4>
            <ul className={cn('footer-list')}>
              <li className={cn('footer-list-items')}>
                <a href="/" className={cn('footer-list-items-link')}>
                  Giới Thiệu Về ShoesG2
                </a>
              </li>
              <li className={cn('footer-list-items')}>
                <a href="/" className={cn('footer-list-items-link')}>
                  Thông Tin Tuyển Dụng
                </a>
              </li>
              <li className={cn('footer-list-items')}>
                <a href="/" className={cn('footer-list-items-link')}>
                  Liên Hệ Với Truyền Thông
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cn('separate')}></div>
        <div className={cn('policy')}>
          <ul className={cn('policy-list')}>
            <li
              style={{ paddingLeft: '0' }}
              className={cn('policy-list-items')}
            >
              <a href="/" className={cn('policy-list-items-link')}>
                Điều Khoản Dịch Vụ
              </a>
            </li>
            <li className={cn('policy-list-items')}>
              <a href="/" className={cn('policy-list-items-link')}>
                Chính Sách Bảo Mật
              </a>
            </li>
            <li className={cn('policy-list-items')}>
              <a href="/" className={cn('policy-list-items-link')}>
                Chính Sách Vận Chuyển
              </a>
            </li>
            <li className={cn('policy-list-items')}>
              <a href="/" className={cn('policy-list-items-link')}>
                Chính Sách Trả Hàng Và Hoàn Tiền
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
