import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cn = classNames.bind(styles)

function Sidebar() {
  return (
    <div
      style={{ paddingLeft: '0' }}
      className={cn('grid__column', 'sidebar-column')}
    >
      <div className={cn('category_heading')}>
        <h3 style={{ margin: '0 0 7px' }}>Danh Mục</h3>
      </div>
      <nav className={cn('category')}>
        <ul className={cn('category-list')}>
          <li>
            <div
              style={{ color: 'white', fontSize: '16px' }}
              className={cn('stack-btn')}
            >
              Nhãn Hiệu
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </div>
            <ul style={{ listStyle: 'none' }}>
              <li className={cn('category-items')}>
                <a href="/" className={cn('category-items-link')}>
                  Adidas
                </a>
              </li>
              <li className={cn('category-items')}>
                <a href="/" className={cn('category-items-link')}>
                  Adidas
                </a>
              </li>
              <li className={cn('category-items')}>
                <a href="/" className={cn('category-items-link')}>
                  Adidas
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
