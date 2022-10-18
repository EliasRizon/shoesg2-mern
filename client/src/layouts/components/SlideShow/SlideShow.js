import classNames from 'classnames/bind'
import styles from './SlideShow.module.scss'

const cn = classNames.bind(styles)

function SlideShow() {
  return (
    <div className={cn('grid')}>
      <div className={cn('grid__row', 'app-content')}>
        <input
          className={cn('slide-radio-btn')}
          type="radio"
          name="radio-btn"
          id={cn('radio1')}
        />
        <input
          className={cn('slide-radio-btn')}
          type="radio"
          name="radio-btn"
          id={cn('radio2')}
        />
        <input
          className={cn('slide-radio-btn')}
          type="radio"
          name="radio-btn"
          id={cn('radio3')}
        />
        <input
          className={cn('slide-radio-btn')}
          type="radio"
          name="radio-btn"
          id={cn('radio4')}
        />
        <input
          className={cn('slide-radio-btn')}
          type="radio"
          name="radio-btn"
          id={cn('radio5')}
        />
        <div
          style={{ padding: '0' }}
          className={cn('grid__column', 'slide-column')}
        >
          <div className={cn('slider')}>
            <div className={cn('slides')}>
              <div className={cn('slide', 'slide-first')}>
                <div
                  className={cn('slide-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/QMqwGHvd/chup-anh-giay-dep.jpg)',
                  }}
                ></div>
              </div>
              <div className={cn('slide')}>
                <div
                  className={cn('slide-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/xCT709Sy/giay-mlb-boston-rep11.jpg)',
                  }}
                ></div>
              </div>
              <div className={cn('slide')}>
                <div
                  className={cn('slide-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/c4Kpg1tF/nike-air-force-1-low-jewel-silt-red-1-681x478-1.jpg)',
                  }}
                ></div>
              </div>
              <div className={cn('slide')}>
                <div
                  className={cn('slide-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/wvfrMnqK/WMNS-Shattered-Backboard-AJ1-9.jpg)',
                  }}
                ></div>
              </div>
              <div className={cn('slide')}>
                <div
                  className={cn('slide-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/0jzBwZjz/B-t-mi-5-me-o-chu-p-a-nh-gia-y-de-p-e-p-1.jpg)',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ paddingLeft: '20px', paddingRight: '0' }}
          className={cn('grid__column', 'slide-nav-column')}
        >
          <div className={cn('grid__row')} style={{ height: '100%' }}>
            <div className={cn('grid__column-navigation')}>
              <label
                for={cn('radio1')}
                className={cn('manual-btn', 'manual-btn1')}
              >
                <div
                  className={cn('manual-btn-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/QMqwGHvd/chup-anh-giay-dep.jpg)',
                  }}
                ></div>
              </label>
              <label
                for={cn('radio2')}
                className={cn('manual-btn', 'manual-btn2')}
              >
                <div
                  className={cn('manual-btn-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/xCT709Sy/giay-mlb-boston-rep11.jpg)',
                  }}
                ></div>
              </label>
              <label
                for={cn('radio3')}
                className={cn('manual-btn', 'manual-btn3')}
              >
                <div
                  className={cn('manual-btn-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/c4Kpg1tF/nike-air-force-1-low-jewel-silt-red-1-681x478-1.jpg)',
                  }}
                ></div>
              </label>
              <label
                for={cn('radio4')}
                className={cn('manual-btn', 'manual-btn4')}
              >
                <div
                  className={cn('manual-btn-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/wvfrMnqK/WMNS-Shattered-Backboard-AJ1-9.jpg)',
                  }}
                ></div>
              </label>
              <label
                for={cn('radio5')}
                className={cn('manual-btn', 'manual-btn5')}
              >
                <div
                  className={cn('manual-btn-img')}
                  style={{
                    backgroundImage:
                      'url(https://i.postimg.cc/0jzBwZjz/B-t-mi-5-me-o-chu-p-a-nh-gia-y-de-p-e-p-1.jpg)',
                  }}
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideShow
