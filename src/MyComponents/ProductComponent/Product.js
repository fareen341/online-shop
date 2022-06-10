import React from 'react'
import { ProductList } from './ProductChildrens/ProductList'
import { SearchBar } from './ProductChildrens/SearchBar'
import { SideFilter } from './ProductChildrens/SideFilter'

export const Product = () => {
  return (
    <div>
      <SearchBar />
      <SideFilter />
      <ProductList />
    </div>
  )
}
