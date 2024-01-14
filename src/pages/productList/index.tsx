import Products from "../../components/Products/Products";
import { Grid, Section } from '../../pages/productList/style'
import Search from "../../components/search";
import Categories from "../../components/catergories";

function ProductList (){
 
    return(
        <Section>
            <Search/>
            <h2>Top Selling Products</h2>
            <Categories/>
            <Grid className='row justify-content-center'>
                <Products/>
            </Grid>
        </Section>
        
    )
}

export default ProductList