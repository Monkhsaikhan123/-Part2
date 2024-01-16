import React, { useEffect, useState } from 'react'
import '../styles/ShineMedeeOruulah.css'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000/"

const ShineMedeeOruulah = () => {
    const [addSection, setAddSection] = useState(false)
    const [formData, setFormData] = useState({
        name:'',
        img:'',
        desc:'',
    })

    const [dataList, setDataList] = useState([])
    const handleOnChange = (e) =>{
        const {value,name} = e.target
        setFormData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = await axios.post("/create", formData)
        console.log(data)
        if(data.data.success){
            setAddSection(false)
            alert(data.data.message)
        }
    }

    const getFetchData = async()=>{
        const data = await axios.get("/medee")
        console.log(data)
        if(data.data.success){
            setDataList(data.data.data)
        }
    }

    useEffect(()=>{
        getFetchData()    
    },[])
    console.log(dataList)
  return (
    <div className='medeeOruulah'>
        
        <button className='btn-add' onClick={()=>setAddSection(true)}>Add</button>
        {
            addSection &&(
                <div className='addContainer'>
                    <form onSubmit={handleSubmit}>
                        <div className='close-btn' onClick={()=>setAddSection(false)}>X</div>
                        <label htmlFor='name'> Name:</label>
                        <input type='text' id='name' name='name' placeholder='Гарчиг оруулах' onChange={handleOnChange}
                        />

                        <label htmlFor='img'> Image:</label>
                        <input type='text' id='img' name='img' placeholder='Зураг оруулах'  onChange={handleOnChange}/>

                        <label htmlFor='desc'> Description:</label>
                        <textarea type='text' id='desc' name='desc' placeholder='Мэдээлэл оруулах'  onChange={handleOnChange}></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            )
        }
        

        <div className='tableContainer'>
            <table>
                <thead>
                    <tr>
                        <th className='ner'>Name</th>
                        <th className='zurag'>Image</th>
                        <th className='desc'>Description</th>
                        <th className='icon'></th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((el)=>{
                        return(
                            <tr>
                                <td className='ner1'>{el.name}</td>
                                <td className='zurag1'>{el.img}</td>
                                <td className='desc1'>{el.desc}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default ShineMedeeOruulah