import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import g from './Images/g.jpg'
import bg from './Images/bg.jpg';



export default function Profile() {
  return (
    <div>
    <center>
        <div> <Card sx={{ maxWidth: 500, minHeight: 600, margin: 8, border: '5px outset aqua', borderRadius: 5, backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", height: "100%", width: "300%", backgroundSize:"200%" }}>
            <center>
                <CardMedia sx={{ maxWidth: 250, borderRadius: 150, border: '5px inset aqua', margin: 4, marginLeft: 5 }}
                    component="img"
                    alt="Suraj Kumar"
                    height="250"
                    image={g}
                />
            </center>
            <CardContent>
                <Typography color="black" gutterBottom variant="h3" component="div" fontFamily={'serif'}>
                    Suraj Kumar<br></br>
                </Typography>
                <Typography color="Red" gutterBottom variant="h3" component="div" fontFamily={'serif'}> 2100032404
                </Typography>
                <Typography variant="body2" color="white">
                    <b><p>Front End Enthusiastic</p>
                    <p>CSE Department, KL University</p>
                    <p>From Vijayawada</p></b>
                </Typography>
            </CardContent>
        </Card></div>
    </center>
</div>
  );
}