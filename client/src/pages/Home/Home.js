import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'

const cn = classNames.bind(styles)

function Home() {
  return (
    <div
      style={{ paddingRight: '0' }}
      className={cn('grid__column', 'product_column')}
    >
      <div className={cn('filter-select')}>
        <span className={cn('filter-select-label')}>Sắp Xếp Theo:</span>
        <div className={cn('selection')}>
          <span
            style={{ marginLeft: '7px' }}
            className={cn('filter-select-value')}
          >
            Giá: Tăng Dần
          </span>
          <i
            style={{ marginLeft: '3px' }}
            className={cn('fa-solid fa-angle-down')}
          ></i>
          <ul className={cn('filter-list')}>
            <li className={cn('filter-items')}>
              <a className={cn('filter-items-link')} href="/">
                A-Z
              </a>
            </li>
            <li className={cn('filter-items')}>
              <a className={cn('filter-items-link')} href="/">
                Giá: Tăng Dần
              </a>
            </li>
            <li className={cn('filter-items')}>
              <a className={cn('filter-items-link')} href="/">
                Giá: Giảm Dần
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={cn('product')}>
        <div className={cn('grid__row', 'product-row')}>
          <div className={cn('grid__column-product')}>
            <div className={cn('product-items')}>
              <a className={cn('product-items-link')} href="/">
                <div
                  className={cn('product-items__img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/vTpkYzRc/a0.webp)',
                  }}
                ></div>
                <h4 className={cn('product-items__name')}>Name</h4>
              </a>
              <a href="/" className={cn('product-items__brand-link')}>
                <div className={cn('product-items__brand')}>Brand</div>
              </a>
              <div className={cn('product-items__price')}>
                <span className={cn('product-items__price-current')}>
                  100000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className={cn('pagination')}>
        <li className={cn('pagination-items')}>
          <a href="/" className={cn('pagination-items-link')}>
            <FontAwesomeIcon icon={faCaretLeft}></FontAwesomeIcon>
          </a>
        </li>
        <li className={cn('pagination-items', 'pagination-items-active')}>
          <a href="/" className={cn('pagination-items-link')}>
            1
          </a>
        </li>
        <li className={cn('pagination-items')}>
          <a href="/" className={cn('pagination-items-link')}>
            2
          </a>
        </li>
        <li className={cn('pagination-items')}>
          <a href="/" className={cn('pagination-items-link')}>
            3
          </a>
        </li>
        <li className={cn('pagination-items')}>
          <a href="/" className={cn('pagination-items-link')}>
            4
          </a>
        </li>
        <li className={cn('pagination-items')}>
          <a href="/" className={cn('pagination-items-link')}>
            5
          </a>
        </li>
        <li className={cn('pagination-items')}>
          <a href="/" className={cn('pagination-items-link')}>
            ...
          </a>
        </li>
        <li className={cn('pagination-items')}>
          <a href="/" className={cn('pagination-items-link')}>
            10
          </a>
        </li>
        <li className={cn('pagination-items')}>
          <a href="/" className={cn('pagination-items-link')}>
            <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Home
