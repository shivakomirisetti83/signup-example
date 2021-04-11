import React,{Component} from 'react';
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            mobile:"",
            email:"",
            password:""            
        };
    }

    Register = ()=>{
        const {name,mobile,email,password}=this.state;
        const userlist = JSON.parse(localStorage.getItem('newData')) || [];
        const newData = userlist.length > 0 ? [...userlist, {name,mobile,email,password} ] : [{name,mobile,email,password}];
        localStorage.setItem('newData', JSON.stringify(newData));
        this.props.history.push('Login');
    }  

    Pagechange = () =>{
        this.props.history.push('Login');
    }
    
    onInputChange = ({target}) => {
        this.setState({[target.name]: target.value});
    }
        
    render(){
        const {name, mobile, email, password} = this.state;

        return( 
            <div>
                <h2 className="heading">Welcome Back!</h2>
                <h4 className="CaptionName">Please Enter Your Details</h4>
                <input type="text" name="name" placeholder="Enter Your Name" onChange={this.onInputChange} value={name}/><br/>
                <input type="text" name="mobile" placeholder="Enter Your Number" onChange={this.onInputChange} value={mobile}/><br/>
                <input type="email" name="email" placeholder="Enter Your Email" onChange={this.onInputChange} value={email}/><br/>
                <input type="password" name="password" placeholder="Enter Password" onChange={this.onInputChange} value={password}/><br/>
                <button className="btn1" onClick={this.Register}>Register</button>
                <h4>or</h4>
                <a onClick={this.Pagechange}><h2>Login</h2></a>
            </div>              
        );
    }
}

export default Register;