import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../../pages/home/home'
import AddProduct from '../../pages/ManageProduct/AddProduct'
import ListProduct from '../../pages/ManageProduct/ListProducts'
import Cart from '../../pages/cart/Cart'

export default function SportLeagueRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home></Home>} />
            <Route path="/addproduct" element={<AddProduct></AddProduct>} />
            <Route path="/products" element={<ListProduct></ListProduct>} />
            <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
    )
}
