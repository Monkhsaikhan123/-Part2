
import React, {Component} from 'react';
import Home from './home'

export default class UserDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            userData:'',
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/userData',{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type" : 'application/json',
                Accept: 'appilcation/json',
                'Access-Control-Allow-Origin' : '*',
            },
            body:JSON.stringify({
                token:window.localStorage.getItem('token'),
            })
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data,'userData');
            this.setState({userData: data.data})
            if(data.data ==='token expired'){
                alert('Token expired login again')
                window.localStorage.clear();
                window.location.href='./sign-in'
            }
        })
    }

    logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
    }

    render(){
        return(
            <div className='user-header'>
                <div className='userheader-details'>
                    <h1>Сайн байна уу</h1>
                    <h3>{this.state.userData.fname}</h3>
                    <h3>{this.state.userData.email}</h3>
                    <br/>
                    <button onClick={this.logOut}>Log Out</button>
                </div>
                
            </div>
        )
    }
}