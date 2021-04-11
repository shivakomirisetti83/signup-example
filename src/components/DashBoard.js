import React, {Component} from 'react';

class DashBoard extends Component{
    Pagechange = () =>{
        this.props.history.push('Login');
    }
    
    render(){
        const Users = JSON.parse(localStorage.getItem('newData')) || [];

        return(
            <div>
                <div className="list">
                    <h2>User List</h2>
                    <table>
                        <thead>
                            <td>S.no</td>
                            <td>Name</td>
                            <td>Mobile</td>
                            <td>Email</td>
                        </thead>
                        <tbody>
                            {Users.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.email}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <button className="btn2" onClick={this.Pagechange} >Log Out</button>
            </div>
        );
    }
}

export default DashBoard;