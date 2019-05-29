import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserList from './../../components/UserList/UserList';
import UserItem from './../../components/UserItem/UserItem';

import { connect } from 'react-redux';
import { actFetchUsersRequest } from './../../actions/index';

class UserListPage extends Component {

    componentWillMount() {
        this.props.fetchAllUsers();
    }

    render() {
        var { users } = this.props;
        return (
            <div className="col-md-12">
                <Link to="/user/add" className="btn btn-info mb-8">
                    Thêm user
                </Link>

                <div className="panel panel-primary">
                    <div className="panel panel-heading">
                        <h3 className="panel-title"> Danh sách user</h3>
                    </div>
                    <UserList>
                        {this.showUser(users)}
                    </UserList>
                </div>
            </div>
        
        );
    }

    showUser(users) {
        var result = null;
        if(users.length > 0) {
            result = users.map((user, index) => {
                return (
                    <UserItem 
                        key = {index}
                        user = {user}
                        index = {index}
                    />
                )
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUsers: () => {
            dispatch(actFetchUsersRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);

