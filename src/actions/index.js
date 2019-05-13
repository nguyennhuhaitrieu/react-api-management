import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('product', 'GET', null).then(res =>{
            dispatch(actFetchProducts(res.data))
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}


export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'DELETE', null).then(() =>{
            dispatch(actDeleteProducts(id))
        });
    };
}

export const actDeleteProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
}

export const actAddProductsRequest = (product) => {
    return (dispatch) => {
        return callApi(`product/`, 'POST', product).then(res =>{
            dispatch(actAddProduct(res.data))
        });
    };
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}

export const actGetProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'GET', null).then(res =>{
            dispatch(actGetProduct(res.data))
        });
    };
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCTS,
        product
    }
}

export const actUpdateProductsRequest = (product) => {
    return (dispatch) => {
        return callApi(`product/${product.id}`, 'PUT', product).then(res =>{
            dispatch(actUpdateProduct(res.data))
        });
    };
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}