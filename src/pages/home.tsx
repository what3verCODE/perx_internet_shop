import React from "react";
import {MainLayout} from "../layouts";
import {ProductCards} from "../components/product/ProductCards";

export const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <ProductCards />
        </MainLayout>
    )
}