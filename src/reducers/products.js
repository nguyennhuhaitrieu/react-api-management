import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (products, id) => {
    var result = -1;
    console.log()
    products.forEach((product, index) => {
        if(product.id === id) {
            result = index;
        }
    });
    return result;
}

const products = (state =initialState, action) => {
    var index = -1;
    var { id } = action;
    switch(action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCTS:
           index = findIndex(state, id);
           state.splice(index, 1);
           return [...state];
        case Types.ADD_PRODUCTS:
            state.push(action.product);
            return state;
        case Types.UPDATE_PRODUCT:
            return state;
        case Types.SHOW_DATA_EDIT_PRODUCTS:
            state = action.dataProduct;
            return state;
        default: return [...state];
    }
};

export default products;