import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserItem extends Component {

    render() {
        var { user } = this.props;
        return (
            <tr>
                <td>1</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td>
                    <Link 
                        to = {`user/${user.id}/edit`}
                        type="button" 
                        className="btn btn-success mr-16"
                    >
                        Sửa
                    </Link>

                    <button 
                        type="button" 
                        className="btn btn-danger"
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserItem;