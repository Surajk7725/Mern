import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Checkbox from '@mui/material/Checkbox';

export default function Meals() {
  return (
    <ImageList sx={{ width: 2400, height: 250 ,top: -100, position:"relative"}}>
      <ImageListItem key="Subheader" cols={12}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=500&fit&auto=format`}
            srcSet={`${item.img}?w=500&fit&auto=format&dpr=2 2x`}
            alt={item.title}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <Checkbox
                sx={{ color: 'rgba(0, 0, 1000, 1000)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </Checkbox>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://i.ytimg.com/vi/xkMbJCtaaqA/maxresdefault.jpg',
      title: 'Manchurian',
      author: 'Rs.75/-',
    },
    {
      img: 'https://www.chefkunalkapur.com/wp-content/uploads/2021/03/veg-chowmein-min-scaled.jpg?',
      title: 'Veg-Noodles',
      author: 'Rs.70/-',
      cols: 2,
    },
    {
      img: 'https://previews.123rf.com/images/indianfoodimages/indianfoodimages1904/indianfoodimages190400878/121766046-veg-or-chicken-manchurian-with-gravy-popular-indo-chinese-food.jpg',
      title: 'Chicken-Manchurian',
      author: 'Rs.125/-',
      cols: 2,
    },
    {
      img: 'https://img.freepik.com/premium-photo/chicken-hakka-noodles-schezwan-szechwan-noodles-served-bowl-with-chopsticks-selective-focus_466689-74796.jpg',
      title: 'Chicken-Noodles',
      author: 'Rs.120/-',
      featured: true,
    },
    {
      img: 'https://www.bigfattummy.com/wp-content/uploads/2020/04/Vegetable-Fried-Rice-11-1200x900.jpg',
      title: 'Veg-Fried Rice',
      author: 'Rs.90/-',
    },
    {
      img: 'https://www.sandyathome.com/wp-content/uploads/2020/11/chicken-65-fried-rice.jpg',
      title: 'Chicken-Fried Rice',
      author: 'Rs.110/-',
    },
    {
      img: 'https://image.shutterstock.com/image-photo/south-indian-meals-served-white-260nw-522574912.jpg',
      title: 'Meals',
      author: 'Rs.60/-',
      rows: 2,
      cols: 2,
    },
    {
      img:'https://www.funfoodfrolic.com/wp-content/uploads/2022/01/Oats-Khichdi-Blog.jpg',
      title: 'Kichadi',
      author: 'Rs.80/-',
    },
    {
      img: 'https://www.boldsky.com/img/2018/03/curdrice-1522321877.jpg',
      title: 'Curd Rice',
      author: 'Rs.40/-',
    },
    {
      img: 'https://www.flavourstreat.com/wp-content/uploads/2020/12/turmeric-lemon-rice-recipe-02.jpg',
      title: 'Lemon Rice',
      author: 'Rs.50/-',
      cols: 2,
    },
  ];