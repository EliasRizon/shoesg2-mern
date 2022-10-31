import { DefaultLayout, HomeLayout } from '~/layouts'

import Home from '~/pages/Home'
import Cart from '~/pages/Cart'
import ShoeDetail from '~/pages/ShoeDetail'
import Auth from '~/pages/Auth'

export const publicRoutes = [
  { path: '/:slug', conponemt: ShoeDetail, layout: DefaultLayout },
  { path: '/brand', conponemt: Cart, layout: DefaultLayout },
  { path: '/auth', conponemt: Auth, layout: null },
  { path: '/', conponemt: Home, layout: HomeLayout },
]

export const privateRoutes = []
