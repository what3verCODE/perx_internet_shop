import {IProduct} from "../../models/product";
import {createAsyncThunk, createReducer, createSelector} from "@reduxjs/toolkit";
import {withPrefix} from "../utils";
import {apiURL} from "../../../utils/constants";
import {RootState} from "../types";
import {v4 as uuidv4} from "uuid";

interface ProductsState {
    isLoading: boolean;
    data: IProduct[];
}

const initialState: ProductsState = {
    isLoading: false,
    data: []
}

const getActionName = withPrefix('PRODUCTS');

const filterDealers = async (dealers: string[]) => {
    if (!dealers || !dealers.length) {
        return [];
    }

    try {
        const response = await fetch(`${apiURL}/dealers`);
        const data = await response.json();
        return data.filter((item: string) => dealers.find(dealer => dealer === item));
    } catch (e) {
        return [];
    }
}

export const fetchProducts = createAsyncThunk<IProduct[], string[]>(getActionName('fetchProducts'), async (dealers, thunkAPI) => {
    let url = `${apiURL}/goods`

    const filteredDealers = await filterDealers(dealers);
    if (filteredDealers && filteredDealers.length) {
        url = `${url}?dealers=${filteredDealers.join(',')}`
    }

    const response = await fetch(url);
    const products: IProduct[] = await response.json()
    return products.map(product => {
        product.uuid = uuidv4();
        return product;
    });
})

export const productsReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload;
        })
})

export const selectProducts = (state: RootState) => state.products;
export const selectProductsData = createSelector(selectProducts, (state) => state.data);