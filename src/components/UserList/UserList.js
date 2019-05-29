import React, { Component } from 'react';

class UserList extends Component {
    render() {
        return (
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>STT</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                        <th>Hành động</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;