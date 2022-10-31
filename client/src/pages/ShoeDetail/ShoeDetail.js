import { CircularProgress, Paper } from '@mui/material'
import classNames from 'classnames/bind'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getShoe } from '~/actions/shoesActions'
import styles from './ShoeDetail.module.scss'

const cn = classNames.bind(styles)

function ShoeDetail() {
  const { shoe, isLoading } = useSelector((store) => store.shoesReducer)
  const dispatch = useDispatch()
  const { slug } = useParams()
  let shoeId = slug.split('-')
  shoeId = shoeId[shoeId.length - 1]
  let price = 0

  if (!isLoading) {
    price = Number(shoe.pricing.price).toLocaleString('de-DE')
  }

  useEffect(() => {
    dispatch(getShoe(shoeId))
  }, [dispatch, shoeId])

  if (isLoading) {
    return (
      <Paper
        style={{ backgroundColor: '#121212' }}
        elevation={6}
        className={cn('loadingPaper')}
      >
        <CircularProgress style={{ marginTop: '200px' }} size="7em" />
      </Paper>
    )
  }

  return (
    <div className={cn('grid')}>
      <div className={cn('grid__row app-content')}>
        <div
          style={{ marginTop: '0', marginBottom: '0' }}
          className={cn('separate')}
        ></div>
        <div style={{ lineHeight: '40px' }} className={cn('pweb_title')}>
          <h1 style={{ marginTop: '0' }}>
            <span className={cn('pweb_title-text')}>{shoe.name}</span>
          </h1>
        </div>
        <div
          style={{ paddingLeft: '0', paddingRight: '25px' }}
          className={cn('grid__column', 'slideshow-column')}
        >
          <input
            className={cn('pweb_slide-radio-btn')}
            type="radio"
            name="radio-btn"
            id={cn('pweb_radio1')}
          />
          <input
            className={cn('pweb_slide-radio-btn')}
            type="radio"
            name="radio-btn"
            id={cn('pweb_radio2')}
          />
          <input
            className={cn('pweb_slide-radio-btn')}
            type="radio"
            name="radio-btn"
            id={cn('pweb_radio3')}
          />
          <input
            className={cn('pweb_slide-radio-btn')}
            type="radio"
            name="radio-btn"
            id={cn('pweb_radio4')}
          />
          <input
            className={cn('pweb_slide-radio-btn')}
            type="radio"
            name="radio-btn"
            id={cn('pweb_radio5')}
          />
          <div className={cn('pweb_slider')}>
            <div className={cn('pweb_slides')}>
              <div
                style={{ backgroundColor: `${shoe.backgroundColor}` }}
                className={cn('pweb_slide', 'pweb_slide-first')}
              >
                <div
                  className={cn('pweb_slide-img')}
                  style={{ backgroundImage: `url(${shoe.image[0]})` }}
                ></div>
              </div>
              <div
                style={{ backgroundColor: `${shoe.backgroundColor}` }}
                className={cn('pweb_slide')}
              >
                <div
                  className={cn('pweb_slide-img')}
                  style={{ backgroundImage: `url(${shoe.image[1]})` }}
                ></div>
              </div>
              <div
                style={{ backgroundColor: `${shoe.backgroundColor}` }}
                className={cn('pweb_slide')}
              >
                <div
                  className={cn('pweb_slide-img')}
                  style={{ backgroundImage: `url(${shoe.image[2]})` }}
                ></div>
              </div>
              <div
                style={{ backgroundColor: `${shoe.backgroundColor}` }}
                className={cn('pweb_slide')}
              >
                <div
                  className={cn('pweb_slide-img')}
                  style={{ backgroundImage: `url(${shoe.image[3]})` }}
                ></div>
              </div>
              <div
                style={{ backgroundColor: `${shoe.backgroundColor}` }}
                className={cn('pweb_slide')}
              >
                <div
                  className={cn('pweb_slide-img')}
                  style={{ backgroundImage: `url(${shoe.image[4]})` }}
                ></div>
              </div>
            </div>
          </div>
          <div className={cn('pweb_navigation-manual')}>
            <label
              style={{
                backgroundColor: `${shoe.backgroundColor}`,
                backgroundImage: `url(${shoe.image[0]})`,
              }}
              htmlFor={cn('pweb_radio1')}
              className={cn('pweb_manual-btn', 'pweb_manual-btn1')}
            ></label>
            <label
              style={{
                backgroundColor: `${shoe.backgroundColor}`,
                backgroundImage: `url(${shoe.image[1]})`,
              }}
              htmlFor={cn('pweb_radio2')}
              className={cn('pweb_manual-btn', 'pweb_manual-btn2')}
            ></label>
            <label
              style={{
                backgroundColor: `${shoe.backgroundColor}`,
                backgroundImage: `url(${shoe.image[2]})`,
              }}
              htmlFor={cn('pweb_radio3')}
              className={cn('pweb_manual-btn', 'pweb_manual-btn3')}
            ></label>
            <label
              style={{
                backgroundColor: `${shoe.backgroundColor}`,
                backgroundImage: `url(${shoe.image[3]})`,
              }}
              htmlFor={cn('pweb_radio4')}
              className={cn('pweb_manual-btn', 'pweb_manual-btn4')}
            ></label>
            <label
              style={{
                backgroundColor: `${shoe.backgroundColor}`,
                backgroundImage: `url(${shoe.image[4]})`,
              }}
              htmlFor={cn('pweb_radio5')}
              className={cn('pweb_manual-btn', 'pweb_manual-btn5')}
            ></label>
          </div>
          <div className={cn('pweb_paragraph')}>{shoe.description}</div>
        </div>
        <div
          style={{ paddingRight: '0px', paddingLeft: '30px' }}
          className={cn('grid__column', 'order-column')}
        >
          <div className={cn('pweb_order')}>
            <a href="/" className={cn('pweb_product-items__brand-link')}>
              <div className={cn('pweb_product-items__brand')}>
                {shoe.brand}
              </div>
            </a>
            <div className={cn('pweb_product-items__price')}>
              <span className={cn('pweb_product-items__price-current')}>
                {price}đ
              </span>
            </div>
            <div
              style={{ marginBottom: '10px' }}
              className={cn('pweb_product-items__size')}
            >
              Chọn Kích Thước:
            </div>
            <form action="" method="post">
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="31"
                id={cn('size-radio31')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="32"
                id={cn('size-radio32')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="33"
                id={cn('size-radio33')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="34"
                id={cn('size-radio34')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="35"
                id={cn('size-radio35')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="36"
                id={cn('size-radio36')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="37"
                id={cn('size-radio37')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="38"
                id={cn('size-radio38')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="39"
                id={cn('size-radio39')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="40"
                id={cn('size-radio40')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="41"
                id={cn('size-radio41')}
              />
              <input
                className={cn('pweb_size-radio-btn')}
                type="radio"
                name="size"
                value="42"
                id={cn('size-radio42')}
              />
              <div style={{ padding: '4px' }} className={cn('grid__row')}>
                <label
                  htmlFor={cn('size-radio31')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items31')}>
                    <span>31</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio32')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items32')}>
                    <span>32</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio33')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items33')}>
                    <span>33</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio34')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items34')}>
                    <span>34</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio35')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items35')}>
                    <span>35</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio36')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items36')}>
                    <span>36</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio37')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items37')}>
                    <span>37</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio38')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items38')}>
                    <span>38</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio39')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items39')}>
                    <span>39</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio40')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items40')}>
                    <span>40</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio41')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items41')}>
                    <span>41</span>
                  </div>
                </label>
                <label
                  htmlFor={cn('size-radio42')}
                  className={cn('pweb_grid__column-size')}
                >
                  <div className={cn('pweb_size-items', 'pweb_size-items42')}>
                    <span>42</span>
                  </div>
                </label>
              </div>
              <button
                style={{ marginTop: '20px' }}
                type="submit"
                className={cn('pweb_buy-btn')}
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </form>
            <div
              style={{ marginBottom: '10px', marginTop: '25px' }}
              className={cn('pweb_product-items__size')}
            >
              ID Sản Phẩm: {shoe.shoeId}
            </div>
            <div style={{ marginTop: '20px' }} className={cn('separate')}></div>
            <div style={{ marginTop: '30px' }} className={cn('pweb_size-help')}>
              <a href="https://giayhongthanh.com.vn/wp-content/uploads/2022/05/7a8baa45f531356f6c20.jpg">
                Hướng Dẫn Chọn Kích Thước
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoeDetail
