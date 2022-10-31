import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Shoes from '~/components/Shoes'

import { getShoes } from '~/actions/shoesActions'

const cn = classNames.bind(styles)

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getShoes())
  }, [dispatch])

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

      <Shoes />

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
