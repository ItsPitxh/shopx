import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import LoginPage from "../Login/LoginPage";
import HomePage from "../Home/HomePage";
import ProductPage from "../Products/ProductPage";
import CartPage from "../cart/CartPage";
import App from "../../App";

const UserRoute: FC = () => {
    return (
        <Routes>
            <Route element={<MainLayout />} >
                <Route index element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products/*" element={<ProductPage/>} />
                <Route path="/cart" element={<CartPage />}>
                </Route>
                <Route path="*" element={<Navigate to={'error/404'} />} />
            </Route>
        </Routes>
    )
}

export default UserRoute;