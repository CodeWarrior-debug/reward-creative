import React from 'react'
import {palette, spacing, typography} from '@material-ui/system'
import { NoSsr } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import styled, {ThemeProvider} from 'styled-components'
// import Box from '@material-ui/core/Box'


const Box= styled.div`${palette}${spacing}${typography}`;

const theme= createTheme();



const Sampler = () => {
    return (
        <NoSsr>
            <ThemeProvider theme={theme}>
        <Box
            color='primary.main'
            bgcolor='red'
            bordercolor='red'
            fontFamily='h6.fontFamily'
            fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md:'h3.fontSize'}}
            p={{ xs:2, sm: 3, md: 4}}
>
    My Box
        </Box>


            </ThemeProvider>


        </NoSsr>

        // <div>
        //     <Box bgcolor='red' width='50px' flexbox=''>Here's something</Box>
        // </div>
    )
}

export default Sampler
