import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles'


const Product = ({ product }) => {

    const classes = useStyles();

    return (
        <main>

        <Card className={classes.root} image='' title={product.name}>
            <CardMedia />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.price}
                    </Typography>
                </div>
                    <Typography variant='h2' color='textSecondary' >{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' >
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>

        </main>
    )
}

export default Product
