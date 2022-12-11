import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import g from './Images/g.jpg';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
         Profile
        </Typography>
        <Typography variant="h5" component="div">
        <img src = {g} width = "300" height="350"/><br />
          Suraj Kumar
        </Typography>
        <Typography sx={{ mb: 1}} color="text.secondary">
          Front End Enthusisast
        </Typography>
        <Typography variant="body2">
          CSE(H) Department, KL University
          <br />
          From Vaddeswaram
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="www.linkedin.com/in/gvachaspathi-gnaneswar">Learn More</Button>
      </CardActions>
    </Card>
  );
}