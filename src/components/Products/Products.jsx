import React from 'react';
import  { Grid } from '@material-ui/core';
import Product from './Product'

const myproducts=[
    {id: 1, name:'writing-1', description:'gospel-tract', price:0.25, imgLink: 'https://i.imgur.com/LajRUfr.jpeg'},
    {id: 2, name:'writing-2', description:'the-vows-are-vague', price:0.25, imgLink: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2FGospel-Tract-Resources-192370540894644%2F&psig=AOvVaw1ky1pBcXmLPtdu_MJ-7vq6&ust=1631647398404000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMD-0q7W_PICFQAAAAAdAAAAABAS'},
]
const Products = () => {

return(
<main>
    <Grid container justify = 'center' spacing = {4}> 
        {myproducts.map((product)=>(
        <Grid item key ={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/> 
        </Grid>
        ))}
    </Grid>
</main>
)

}

export default Products;
