import React,{ Component} from 'react'

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            fname:'',
            lname:'',
            email:'',
            password:'',
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const{fname,lname,email,password} = this.state;
        console.log(fname,lname, email,password);
        fetch('http://localhost:3000/register',{
            method:'POST',
            crossDomain:true,
            headers:{
                "Content-type":"application/json",
                Accept:"appilcation/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                fname,
                email,
                lname,
                password
            }),
        })
            .then((res)=> res.json())
            .then((data)=> {
                console.log(data, "userSign")
            })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='signup' style={{backgroundSize:'cover', backgroundImage:'url("https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
                    <div className='signup-box'>
                        <h3>Sign Up</h3>

                    <div className='mb-3'>
                        <label>First name</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='First name'

                            onChange={(e)=> this.setState({fname : e.target.value})}
                        />
                    </div>

                    <div className='mb-3'>
                        <label>Last name</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Last name'

                            onChange={(e)=> this.setState({lname : e.target.value})}
                        />
                    </div>

                    <div className='mb-3'>
                        <label>Email address</label>
                        <input
                            type='email'
                            className='form-control'
                            placeholder='Enter email'

                            onChange={(e)=> this.setState({email : e.target.value})}
                        />
                        </div>

                        <div className='mb-3'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Enter password'

                                onChange={(e)=> this.setState({password : e.target.value})}
                            />
                        </div>


                        <div className='d-grid'>
                            <button type='submit' className='btn btn-primary'>
                                Sign Up
                            </button>
                            </div>
                            <p className='forgot-password text-right'>
                                Already registered<a href='/sign-in'>Sign in?</a>
                            </p>
                        </div>
                                        
                </div>
                
            </form>
        )
    }
}