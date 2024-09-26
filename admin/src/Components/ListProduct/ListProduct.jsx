import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import crossicon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [allproducts,setAllproducts] = useState([]);

  const fetchinfo = async()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((resp)=>resp.json())
    .then((data)=>{setAllproducts(data)})
    
  }

  useEffect(()=>{
    fetchinfo()
  }, [])
  


  const removeproduct = async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })

    await fetchinfo()
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listProduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old_price</p>
        <p>New_price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {
            allproducts.map((product,index)=>{
              return(
                <>
                <div className="listProduct-format-main" key={index}>
                    <img src={product.image} alt=""  className='listproduct-producticon'/>
                    <p>{product.name}</p>
                    <p>$ {product.old_price}</p>
                    <p>$ {product.new_price}</p>
                    <p>{product.category}</p>
                    <img src={crossicon} alt=""  className='listproduct-removeicon' onClick={()=>removeproduct(product.id)}/>
                </div>
                <hr />
                </>
              )
            })
        }
      </div>
    </div>
  )
}

export default ListProduct