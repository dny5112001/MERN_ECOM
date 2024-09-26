import React, { useState } from 'react'
import './AddProduct.css'
import uploadarea from '../../assets/upload_area.svg'

const AddProduct = () => {

    const [image,setImage] = useState(false)
    const [productdetails,setProductdetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:'',
        old_price:'',
    })
    const imagehandler = (e)=>{
        setImage(e.target.files[0])
    }

    const changehandler = (e)=>{
        setProductdetails({
            ...productdetails,[e.target.name]:e.target.value
        })
    }

    const addproduct = async ()=>{
        console.log(productdetails)
        let responseData;
        let product = productdetails;


        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:"post",
            headers:{
                Accept:'application/json'
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product)

            await fetch('http://localhost:4000/addproduct',{
                method:"POST",
                headers:{
                    Accept:'application/json',
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product added"):alert("Failed")
            })
        }
    }
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input type="text" name="name" placeholder='Type here' value={productdetails.name}  onChange={changehandler}/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input type="text" name='old_price' placeholder='Type here' value={productdetails.old_price}  onChange={changehandler} />
            </div>

            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input type="text" name='new_price' placeholder='Type here' value={productdetails.new_price}  onChange={changehandler}/>
            </div>
        </div>

        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select name="category" className='addproduct-selector' value={productdetails.category}  onChange={changehandler}>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>


        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):uploadarea} alt=""  className='addproduct-thumbnail-image'/>
            </label>
p
            <input type="file" name='image' id='file-input' hidden onChange={imagehandler} />
        </div>
        <button className='addproduct-button' onClick={()=>addproduct()}>Add</button>

    </div>  
  )
}

export default AddProduct