import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

const Navbar = () => {
    return (
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography>
                    <img src={} alt="Commerce.js" height='25px' className={classes.image}/>
                </Typography>

                <div className={classes.grow} />
                <div className={classes.button} >
                    <IconButton aria-label='Show Cart Items' color='inherit'>
                        <img src={logo} />
                        <Badge>

                        </Badge>
                    </IconButton>
                </div>

            </Toolbar>

        </AppBar>
    )
}

export default Navbar
