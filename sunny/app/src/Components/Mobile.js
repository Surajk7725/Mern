import React from 'react'
import a from './Images/a.jpg'
import b from './Images/b.jpg'
import d from './Images/d.jpg'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material'
function Mobile() {
    const mble=[{ 
        "img":<img src={a} width="200" height="200"/>, 
        "model":9, 
        "name":"One Plus", 
        "price":"Rs. 50,000/-", 
        "available":true,
        "button": <Button variant="contained">Buy</Button> 
    }, 
    { 
        "img":<img src={b} width="180" height="205"/>, 
        "model":14, 
        "name":"iPhone", 
        "price":"$1500/-", 
        "available":true,
        "button": <Button variant="contained">Buy</Button>
    },
    { 
        "img":<img src={d} width="160" height="210"/>, 
        "model":14, 
        "name":"Samsung", 
        "price":"$1200/-", 
        "available":true,
        "button": <Button variant="contained">Buy</Button>
    }]
    
    
  return (
    <div>
        <h2>Category of Mobiles</h2>
        <Grid 
                container 
                spacing={2} 
                direction="row" 
                justify="flex-start" 
                alignItems="flex-start" 
            > 
        {mble.map((mb) => (<Grid sx={{ maxWidth: 300, minHeight: 300, margin: 4, border: '5px outset black', borderRadius: 5, backgroundColor: "white", }} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/> Model Number:{mb.model}<br/>Model Name:{mb.name}<br/>Price:{mb.price}<br/> 
        Available: {mb.available 
     ?"Yes" : "No"}<br/><br/>{mb.button}</Grid>))} 
    </Grid>
    </div>
  )
}

export default Mobile