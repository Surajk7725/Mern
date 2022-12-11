import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Checkbox from '@mui/material/Checkbox';

export default function Beverages() {
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
      img: 'https://drinkhomemallorca.com/wp-content/uploads/2019/07/pack-seven-up-12-latas-33-cl.jpg',
      title: '7-UP',
      author: 'Rs.40/-',
    },
    {
      img: 'https://www.pngitem.com/pimgs/m/430-4300064_thums-up-thums-up-soft-drink-300-ml.png',
      title: 'Thums-UP',
      author: 'Rs.40/-',
      cols: 2,
    },
    {
      img: 'https://www.bigbasket.com/media/uploads/p/l/40197902-2_1-maaza-mango-fruit-drink.jpg',
      title: 'Maaza',
      author: 'Rs.15/-',
      cols: 2,
    },
    {
      img: 'https://m.media-amazon.com/images/I/61YtMzKQZDL._SX385_.jpg',
      title: 'Sprite',
      author: 'Rs.35/-',
      featured: true,
    },
    {
      img: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/ORP/Coke-20150730041122131.JPG',
      title: 'Coca-Cola',
      author: 'Rs.40/-',
    },
    {
      img: 'https://ml0co0iaphua.i.optimole.com/JAgwYyw-pLbiNAXa/w:1000/h:1000/q:auto/https://gharstuff.com/wp-content/uploads/2018/12/Frooti-Mango-Fruit-Drink-160ml-2.jpg',
      title: 'Froati',
      author: 'Rs.15/-',
    },
    {
      img: 'https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_438/post_25317316/thumb.jpg',
      title: 'Tea',
      author: 'Rs.20/-',
      rows: 2,
      cols: 2,
    },
    {
      img:'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
      title: 'Coffee',
      author: 'Rs.20/-',
    },
    {
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-220524-chocolate-milkshake-001-ab-web-1654180529.jpg',
      title: 'Chocolate Milk-Shake',
      author: 'Rs.45/-',
    },
    {
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F06%2F07%2FGetAttachmentThumbnail-2.jpg',
      title: 'StrawBerry Milk-Shake',
      author: 'Rs.45/-',
      cols: 2,
    },
  ];