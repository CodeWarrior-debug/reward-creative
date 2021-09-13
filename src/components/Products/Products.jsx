import React from 'react';
import Grid, { GridList } from '@material-ui/core';
import Product from './Product'

const myproducts=[
    {id: 1, name:'writing-1', description:'gospel-tract', price:.25},
    {id: 2, name:'writing-2', description:'the-vows-are-vague', price:.25},
]
const Products = () => {


<main>
    <Grid container justify = 'center' spacing = {4}> 
        {myproducts.map((product)=>(
        <Grid item key ={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/> 
            
        </Grid>
        ))}
        </Grid>
</main>

}

export default Products;
