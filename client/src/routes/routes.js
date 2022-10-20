'use strict'

import { HeaderOnlyLayout, SlideShowLayout } from '~/layouts'

import Home from '~/pages/Home'
import Cart from '~/pages/Cart'

export const publicRoutes = [
  { path: '/', conponemt: Home, layout: SlideShowLayout },
  { path: '/cart', conponemt: Cart, layout: HeaderOnlyLayout },
]

export const privateRoutes = []
