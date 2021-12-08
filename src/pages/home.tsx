import React from "react";
import {MainLayout} from "../layouts";
import {ProductCards} from "../components/product/ProductCards";

interface HomePageProps {
    dealers: string[];
}

export const HomePage: React.FC<HomePageProps> = ({dealers}) => {
    return (
        <MainLayout>
            <ProductCards dealers={dealers} />
        </MainLayout>
    )
}