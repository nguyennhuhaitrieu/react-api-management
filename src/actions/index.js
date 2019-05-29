import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import callApiLogin from './../utils/apiCallerLogin';
//import setAuthToken from '../auth/setAuthToken';
import {LoginStore} from '../localStorage/localStorage';

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

export const actGetProduct = (dataProduct) => {
    return {
        type: Types.SHOW_DATA_EDIT_PRODUCTS,
        dataProduct
    }
}

export const actUpdateProductsRequest = (product) => {
    return (dispatch) => {
        return callApi(`product/${product.id}`, 'PUT', product).then(res =>{
            dispatch(actUpdateProduct(res.data))
            dispatch(actFetchProductsRequest())
        });
    };
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi('users', 'GET', null).then(res =>{
            dispatch(actFetchUsers(res.data))
        });
    };
}

export const actFetchUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users
    }
}

export const actLoginRequest = user => {
    return (dispatch) => {
        return callApiLogin('login', 'post', user).then(res =>{
            const { token } = res.data;
            console.log(token);
            LoginStore.setData('jwtToken', token);
            dispatch(actLogin(res.data));
        });
    };
}

export const actLogin = user => {
    return {
        type: Types.LOGIN,
        user
    }
}