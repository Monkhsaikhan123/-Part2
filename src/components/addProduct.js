import React, {Component} from 'react'

export default class AddProduct extends Component {
  constructor(props){
    super (props)
    this.state = {
      name: '',
      img:'',
      desc: '',
      price: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    const {name,img,desc,price} = this.state;
    console.log(name,img,desc,price)
    fetch('http://localhost:3000/addProduct',{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*"
        },
        body:JSON.stringify({
            name,
            img,
            desc,
            price
        }),
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data,"Products")
    })
  }

  
    render(){
        return(
            <div>
                <div>
                </div>
                <div>
                        <form onSubmit={this.handleSubmit}>
                        <h3>Бараа оруулах</h3>
                        <div className='mb-3'>
                            <label>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='name'
                                onChange={(e)=>this.setState({name: e.target.value})}
                                />
                        </div>
                        <div className='mb-3'>
                            <label>Zurag</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='img'
                                onChange={(e)=>this.setState({img: e.target.value})}
                                />
                        </div>

                        <div className='mb-3'>
                            <label>Description</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='desc'
                                onChange={(e)=>this.setState({desc: e.target.value})}
                                />
                        </div>

                        <div className='mb-3'>
                            <label>Price</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='price'
                                onChange={(e)=>this.setState({price: e.target.value})}
                                />
                        </div>



                        <div className='d-grid'>
                            
                            <button type='submit' className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                        <a href='/userDetails'>Буцах</a>

                    </form>
                </div>
                
            </div>
            
        )
    }
}