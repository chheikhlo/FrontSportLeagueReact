import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../../pages/home/home'
import AddProduct from '../../pages/ManageProduct/AddProduct'
import ListProduct from '../../pages/ManageProduct/ListProducts'
import Cart from '../../pages/cart/Cart'
import PutProduct from '../../pages/ManageProduct/PutProducts'
import DeleteProduct from '../../pages/ManageProduct/DeleteProduct'

export default function SportLeagueRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home></Home>} />
            <Route path="/addproduct" element={<AddProduct></AddProduct>} />
            <Route path="/products" element={<ListProduct></ListProduct>} />
            <Route path="/putproduct/:Id" element={<PutProduct></PutProduct>} />
            <Route path="/deleteproduct/:Id" element={<DeleteProduct></DeleteProduct>} />
            <Route path="/cart" element={<Cart></Cart>} />
        </Routes>
    )
}
