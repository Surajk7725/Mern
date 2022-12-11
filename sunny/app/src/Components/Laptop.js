import React from 'react'
import e from './Images/e.jpg'
import f from './Images/f.jpg'
import h from './Images/h.jpg'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material'
function Laptop() {
    const lap=[{ 
        "img":<img src={e} width="350" height="250"/>, 
        "model":9, 
        "name":"Hp Laptop", 
        "price":"Rs. 57,000/-", 
        "available":true ,
        "button": <Button variant="contained">Buy</Button> 
    }, 
    { 
        "img":<img src={f} width="350" height="295"/>, 
        "model":14, 
        "name":"Lenovo Laptop", 
        "price":"Rs. 75,000/-", 
        "available":true,
        "button": <Button variant="contained">Buy</Button> 
    },
    { 
        "img":<img src={h} width="350" height="300"/>, 
        "model":11, 
        "name":"iPhone", 
        "price":"Rs. 1,50,000/-", 
        "available":true,
        "button": <Button variant="contained">Buy</Button> 
    }]
  return (
    <div> 
    <h2>Category of Laptops</h2>
           <Grid 
                container 
                spacing={2} 
                direction="row" 
                justify="flex-start" 
                alignItems="flex-start" 
            >     
        {lap.map((mb) => (<Grid sx={{ maxWidth: 400, minHeight: 300, margin: 4, border: '5px outset black', borderRadius: 8, backgroundColor: "white", }} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/> Model Number:{mb.model}<br/>Model Name:{mb.name}<br/>Price:{mb.price}<br/> 
        Available: {mb.available ?"Yes" : "No"}<br/><br/>{mb.button}</Grid>))} 
     </Grid>
    </div>
  )
}

export default Laptop