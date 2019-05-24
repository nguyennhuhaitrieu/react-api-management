import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddProductsRequest, actGetProductsRequest, actUpdateProductsRequest } from './../../actions/index';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }


    componentWillReceiveProps(nextProps) {
        this.updateProductItem(nextProps.products)
    }
    
    updateProductItem(item) {
        if(item !==null) {
            this.setState({
                id : item.id,
                txtName : item.name,
                txtPrice : item.price,
                chkbStatus : item.status
            })
        }
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    onSave = (event) => {
        var {txtName, txtPrice, chkbStatus , id} = this.state;
        var { history } = this.props;
        //console.log(this.state);

        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }

        if (id) { //update
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product); // Dùng React Redux 
        }
        history.goBack();
        event.preventDefault();
    }

    render() {
        var {txtName, txtPrice, chkbStatus} = this.state;
        return (
            <div className="col-md-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="txtName"
                            value = {txtName}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="txtPrice"
                            value = {txtPrice}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                name="chkbStatus"
                                value = {chkbStatus}
                                onChange = {this.onChange}
                                checked = {chkbStatus}
                            />
                            Còn hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            </div>
        );
    }
}

const mapStateToToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductsRequest(product));
        },

        onEditProduct: (id) => {
            dispatch(actGetProductsRequest(id));
        },

        onUpdateProduct: (product) => {
            dispatch(actUpdateProductsRequest(product));
        }
    }
}

export default connect(mapStateToToProps, mapDispatchToProps) (ProductActionPage);