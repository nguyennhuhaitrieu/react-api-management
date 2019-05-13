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

            /*callApi(`product/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status,
                })
            });
            */

            this.props.onEditProduct(id); // Dùng React Redux onEditProduct (mapDispatchToProps)
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        if(nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id : itemEditing.id,
                txtName : itemEditing.name,
                txtPrice : itemEditing.price,
                chkbStatus : itemEditing.status
            });
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
        event.preventDefault();
        //console.log(this.state);
        var {txtName, txtPrice, chkbStatus , id} = this.state;
        var { history} = this.props;

        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }

        if (id) { //update
            this.props.onUpdateProduct(product);
        } else {
            /*callApi('product', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus,
            }).then(res => {
                console.log(res);
                history.goBack();
            });
            */
            this.props.onAddProduct(product); // Dùng React Redux 
        }
        history.goBack();
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
        itemEditing: state.itemEditing,
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