import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getAllProducts, getCategoryProducts } from "../../store/actions/actions";


function Categories(){
    const dispatch = useDispatch();
    const {categories} = useSelector((state: { app: any }) => state.app);
    console.log('testRdux', categories)
      useEffect(()=>{
        dispatch(getCategories())
      },[])
    return(
        <ul className='categories'>
            <li onClick={()=> dispatch(getAllProducts())}>all</li>
            {categories?.map((c: string, i: number)=>(
            <li key={i} onClick={()=> dispatch(getCategoryProducts(c))}>{c}</li>
            ))}
        </ul>
    )
}

export default Categories