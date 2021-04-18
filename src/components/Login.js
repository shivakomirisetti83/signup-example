import React,{Component} from 'react';


class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            errormsg:false,           
        };

    }
            
    Login = ()=>{
        const ReceiveData = JSON.parse(localStorage.getItem('newData')) || [];

        if(this.state.email =="" || this.state.password ==""){
           this.setState({ errormsg:true});
        } else {

            for(let i=0; i<=ReceiveData.length-1;i++){
                if(this.state.email === ReceiveData[i].email && this.state.password === ReceiveData[i].password){
                    this.props.history.push('DashBoard', {...ReceiveData[i]});
                    break;
                } else {
                    this.props.history.push('UnAuthorized');
                }
             }
         }
    }

    Pagechange = () =>{
        this.props.history.push('Register');
    }

    onInputChange = ({target}) =>{
        this.setState({[target.name]:target.value});
        this.setState({errormsg:""})

    }

    render(){

        const {email,password} = this.state;

        return( 
            <div>
                <h2 className="heading">Welcome Back!</h2>
                <h4 className="CaptionName">please login to your account</h4>
                <input type="text" name="email" placeholder="Enter Your Email" onChange={this.onInputChange} value={email}/><br/>
                <input type="password" name="password" placeholder="Enter Password" onChange={this.onInputChange} value={password}/><br/>
                <button  className="btn1"onClick={this.Login}>Login</button>
                <h4>or</h4>
                <a onClick={this.Pagechange}><h2>Register</h2></a>
                {this.state.errormsg && <h2 className="errormsg">Enter both email and password</h2>}
            </div>                
        );
    }
}

export default Login;