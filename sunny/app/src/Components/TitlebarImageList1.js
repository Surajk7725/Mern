import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Checkbox from '@mui/material/Checkbox';

export default function TitilebarImageList1() {
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
      img: 'https://i.pinimg.com/originals/29/71/1d/29711d6333667d3235d98f369b33181e.jpg',
      title: 'Dosa',
      author: 'Rs.45/-',
    },
    {
      img: 'https://www.thespruceeats.com/thmb/A_g1pdGtPZBJyJ9ycu18iDzegL4=/1887x1415/smart/filters:no_upscale()/idli-56a510b63df78cf772862c34.jpg',
      title: 'Idli',
      author: 'Rs.30/-',
      cols: 2,
    },
    {
      img: 'https://thumbs.dreamstime.com/b/south-indian-food-medhu-vadai-white-coconut-chutney-39248275.jpg',
      title: 'Vada',
      author: 'Rs.35/-',
      cols: 2,
    },
    {
      img: 'https://static.wixstatic.com/media/0756c6_5696258dbbec47d384fa176a0d6f3583~mv2.png/v1/fit/w_500,h_500,q_90/file.png',
      title: 'Punugulu',
      author: 'Rs.30/-',
      featured: true,
    },
    {
      img: 'https://thumbs.dreamstime.com/b/bonda-mysore-make-urad-dal-very-easy-snack-recipe-my-mother-expert-making-crispy-bondas-62026679.jpg',
      title: 'Mysore Bajji',
      author: 'Rs.35/-',
    },
    {
      img: 'https://cdn.aahaaramonline.com/wp-content/uploads/2013/11/rava_upma_with_onions.jpg',
      title: 'Upma',
      author: 'Rs.25/-',
    },
    {
      img: 'https://cdn-eghdj.nitrocdn.com/baKamaFwxkHGCayvaTDhxQfVzaIgfsMZ/assets/static/optimized/international/wp-content/uploads/sites/3/2020/07/7fcf703fe7008f89af98a7eba3330fb4.Ready-To-Eat-Meals-min.jpg',
      title: 'Puri',
      author: 'Rs.40/-',
      rows: 2,
      cols: 2,
    },
    {
      img:'https://thumbs.dreamstime.com/b/indian-traditional-thali-food-kadai-paneer-indian-traditional-thali-food-kadai-paneer-served-dal-makhani-tandoori-roti-158902209.jpg',
      title: 'Roti',
      author: 'Rs.30/-',
    },
    {
      img: 'https://img.freepik.com/premium-photo/crispy-kanda-bhaji-bhajji-pyaj-pakode-fried-onion-pakora-delicious-street-food-from-india_466689-72976.jpg?',
      title: 'Pakodi',
      author: 'Rs.25/-',
    },
    {
      img: 'https://www.bawarchi.com/uploads/oetl4Cfcdghcj_bigger.jpg',
      title: 'Bondalu',
      author: 'Rs.35/-',
      cols: 2,
    },
  ];