import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../../pages/home/home'
import AddProduct from '../../pages/ManageProduct/AddProduct'
import ListProduct from '../../pages/ManageProduct/ListProducts'
import Cart from '../../pages/cart/Cart'
import Login from '../../pages/authentification/Login'
import Register from '../../pages/authentification/Register'
import PutProduct from '../../pages/ManageProduct/PutProducts'
import DeleteProduct from '../../pages/ManageProduct/DeleteProduct'
import Product from '../../pages/Products/products'
import ListUsers from '../../pages/ManageUsers/ListUsers'
import Profil from '../../pages/profil/profil'
import DeleteProfil from '../../pages/profil/deleteUser'

export default function SportLeagueRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Home></Home>} />
            <Route path="/addproduct" element={<AddProduct></AddProduct>} />
            <Route path="/our-products" element={<Product />} />
            <Route path="/users" element={<ListUsers />} />
            <Route path="/delete/user/:id" element={<DeleteProfil />} />
            <Route path="/profil/:id" element={< Profil/>} />            
            <Route path="/products" element={<ListProduct></ListProduct>} />
            <Route path="/putproduct/:id" element={<PutProduct></PutProduct>} />
            <Route path="/deleteproduct/:id" element={<DeleteProduct></DeleteProduct>} />
            <Route path="/cart/:id" element={<Cart></Cart>} />
            <Route path="/Signin" element={<Login></Login>} />
            <Route path="/Signup" element={<Register></Register>} />
        </Routes>
    )
}
