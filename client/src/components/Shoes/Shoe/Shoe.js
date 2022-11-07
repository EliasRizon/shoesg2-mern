import classNames from 'classnames/bind'
import styles from './Shoe.module.scss'
import { toSlug } from '~/middlewares/toSlug'
import { Link } from 'react-router-dom'

const cn = classNames.bind(styles)

function Shoe({ shoe }) {
  const price = Number(shoe.pricing.price).toLocaleString('de-DE')
  const slug = `${toSlug(shoe.name)}-${shoe.shoeId}`

  return (
    <div className={cn('grid__column-product')}>
      <div className={cn('product-items')}>
        <Link className={cn('product-items-link')} to={`/${slug}`}>
          <div
            className={cn('product-items__img')}
            style={{
              backgroundImage: `url(${shoe.image[0]})`,
            }}
          ></div>
          <h4 className={cn('product-items__name')}>{shoe.name}</h4>
        </Link>
        <Link
          to={`/brand?q=${shoe.brand}`}
          className={cn('product-items__brand-link')}
        >
          <div className={cn('product-items__brand')}>{shoe.brand}</div>
        </Link>
        <div className={cn('product-items__price')}>
          <span className={cn('product-items__price-current')}>{price}đ</span>
        </div>
      </div>
    </div>
  )
}

export default Shoe
