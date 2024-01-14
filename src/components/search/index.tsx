import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchBox } from "./style";
import { Link } from "react-router-dom";
interface Product {
    image: string
    title: string
    price: number
    id: number
}
function Search (){
    const {allProducts} = useSelector((state: { app: any }) => state.app);
    const [searchQuery, setSearchQuery] = useState([])
    console.log('allProducts', allProducts )
    const handleSearch = (val: string) =>{
        console.log('testVal', val)
        if(val.length > 0){
            const result = allProducts.filter((product: {title: string, description: string})=>{
                if(product.title.toLowerCase().includes(val.toLowerCase())){
                    return product
                }else if(product.description.includes(val)){
                    return product
                }
                return;
               })
               console.log('result', result)
               setSearchQuery(result)
        }else{
            setSearchQuery([]) 
        }
       
    }
    return(
        <SearchBox>
            <input type="text" placeholder="Search..." onChange={(e)=>handleSearch(e.target.value)}/>
            {searchQuery?.length > 0 && (
            <div className="dropdown">
                {searchQuery?.map((p: Product)=>(
                    <Link to={`/products/${p.id}`}>
                        <img src={p.image} alt="product-img"/>
                        <div>
                            <p>{p.title}</p>
                            <p>{p.price}</p>
                        </div>
                    </Link>
                ))}
                
            </div>
            )}
            
        </SearchBox>
    )
}

export default Search