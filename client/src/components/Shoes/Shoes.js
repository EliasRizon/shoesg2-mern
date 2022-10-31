import classNames from 'classnames/bind'
import styles from './Shoes.module.scss'
import { useSelector } from 'react-redux'
import Shoe from './Shoe'

const cn = classNames.bind(styles)

function Shoes() {
  const { shoes } = useSelector((store) => store.shoesReducer)

  if (!shoes.length) return 'No posts'

  return (
    <div className={cn('product')}>
      <div className={cn('grid__row', 'product-row')}>
        {shoes?.map((shoe) => (
          <Shoe key={shoe.shoeId} shoe={shoe} />
        ))}
      </div>
    </div>
  )
}

export default Shoes
