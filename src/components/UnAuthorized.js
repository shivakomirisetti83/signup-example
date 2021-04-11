import React, {Component} from 'react';


class UnAuthorized extends Component{

    Pagechange = () =>{
        this.props.history.push('Login');
    }
        render(){
            return(
                <div>
                    <h1 className="Sucusess">
                    Welcome Back!<br/></h1>
                    <h2> Your Entered Details are wrong!</h2>   
                    <h3>Please <a onClick={this.Pagechange}>Tryagain</a></h3>
                </div>
            );
        }
}

export default UnAuthorized;