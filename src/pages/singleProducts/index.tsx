import React, { useEffect } from 'react'
import { getSingleProduct } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DescSide, ImageBox } from './style';

function SingleProducts() {
    const dispatch = useDispatch();
    const { productId } = useParams<{ productId: string }>();
    const { singleProduct } = useSelector((state: { app: any }) => state.app);
  
    console.log('singleProduct', singleProduct)
      useEffect(()=>{
        dispatch(getSingleProduct(productId))
      },[])
  
  return (
    <>
    <h2 style={{textAlign: 'center', fontSize: '40px'}}>Single Product</h2>
    <div style={{display:'flex', gap: '20px', padding: '50px 0', margin: '0 30px'}}>
        <ImageBox>
            <img src={singleProduct.image} alt={singleProduct.title}/>
        </ImageBox>
        <DescSide>
            <p>{singleProduct.title}</p>
            <p className='price'>price: {singleProduct.price}</p>
            <p className='description'>{singleProduct.description}</p>
        </DescSide>
    </div>
    </>
  )
}

export default SingleProducts