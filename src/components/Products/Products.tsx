import React, {useEffect} from 'react'
// import axios from 'axios'
import { getAllProducts } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdHeartEmpty  } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

interface Product {
  image: string;
  category: string
  title: string
  price: number
  id: number
}
function Products() {
  const dispatch = useDispatch();
  const {categories, products} = useSelector((state: { app: any }) => state.app);

  console.log('testRdux', categories)
    useEffect(()=>{
      dispatch(getAllProducts())
    },[])


    
  return (
    <>
      {products?.map((product:Product) =>(
      <div className='card col-6 col-md-4 col-lg-3 col-xl-5col border-0' key={product.id} 

      >
        <Link to={`/products/${product.id}`}>
        <div className="wishlist-icon"><IoMdHeartEmpty/></div>
          <img className="card-img-top" 
              src={product.image}  
            //  ref={imgSource}
            //  onMouseEnter={(e)=>e.target.src=`${product.img_hover}`}
            //  onMouseLeave={(e)=>e.target.src=`${product.img_preview}`}
              alt="..."
              />
        </Link>
          <div className="card-body">
              <h6>{product.category}</h6>
              <h4>{product.title}</h4>
              <p className="card-text">Price: {product.price}</p>
              <button className='add_to_cart'
              // onClick={()=> {
              //   props.add_to_cart(product.id,product.title,product.new_price,product.img_preview)}}
              ><IoCartOutline /> Add to cart</button>
          </div>  
        </div>
      ))} 
    </>
  )
}

export default Products