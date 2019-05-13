import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {actFetchProductsRequest, actDeleteProductsRequest} from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete  = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
        var { products } = this.props;
        console.log(products);
        return (
            <div className="col-md-12">
                <Link to="/product/add" className="btn btn-info mb-8">
                    Thêm sản phẩm
                </Link>

                <div className="panel panel-primary">
                <div className="panel panel-heading">
                    <h3 className="panel-title"> Danh sách sản phẩm </h3>
                </div>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
                </div>
        </div>
        
        );
    }

    showProducts(products) {
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem 
                        key = {index}
                        product = {product}
                        index = {index}
                        onDelete = {this.onDelete}
                    />
                )
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },

        onDeleteProduct: (id) => {
            dispatch(actDeleteProductsRequest(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)