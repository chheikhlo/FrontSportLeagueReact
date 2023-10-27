import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../../pages/home/home'
import AddProduct from '../../pages/ManageProduct/AddProduct'
import ListProduct from '../../pages/ManageProduct/ListProducts'
import Cart from '../../pages/cart/Cart'
import Login from '../../pages/authentification/Login'
import Register from '../../pages/authentification/Register'

export default function SportLeagueRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home></Home>} />
            <Route path="/addproduct" element={<AddProduct></AddProduct>} />
            <Route path="/products" element={<ListProduct></ListProduct>} />
            <Route path="/putproduct/:id" element={<PutProduct></PutProduct>} />
            <Route path="/deleteproduct/:id" element={<DeleteProduct></DeleteProduct>} />
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/Signin" element={<Login></Login>} />
            <Route path="/Signup" element={<Register></Register>} />
        </Routes>
    )
}
