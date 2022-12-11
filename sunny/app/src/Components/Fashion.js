import React from 'react'
import i from './Images/i.jpg'
import j from './Images/j.jpg'
import k from './Images/k.jpg'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material'
function Fashion() {
    const fash=[{ 
        "img":<img src={k} width="270" height="360"/>, 
        "model":10, 
        "name":"Kids Wear", 
        "price":"Rs. 1500/-", 
        "available":true, 
        "button": <Button variant="contained">Buy</Button>
    }, 
    { 
        "img":<img src={i} width="300" height="370"/>, 
        "model":12, 
        "name":"Ladies Wear", 
        "price":"$25/-", 
        "available":true,
        "button": <Button variant="contained">Buy</Button>
    },
    { 
        "img":<img src={j} width="300" height="370"/>, 
        "model":18, 
        "name":"Mens Wear", 
        "price":"$19/-", 
        "available":true,
        "button": <Button variant="contained">Buy</Button>
    }]
  return (
    <div>
    <h2>Category of Fashion</h2>
            <Grid 
                container 
                spacing={2} 
                direction="row" 
                justify="flex-start" 
                alignItems="flex-start" 
            > 
            {fash.map((mb) => (<Grid sx={{ maxWidth: 300, minHeight: 400, margin: 4, border: '5px outset black', borderRadius: 5, backgroundColor: "white", }} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/> Model Number:{mb.model}<br/>Model Name:{mb.name}<br/>Price:{mb.price}<br/> 
        Available: {mb.available?"Yes" : "No"}<br/><br/>{mb.button}</Grid>))} 
     </Grid>
    </div>
  )
}

export default Fashion