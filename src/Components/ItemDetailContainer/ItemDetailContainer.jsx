import React from 'react'

import {useParams} from "react-router-dom";
import {products} from "../../productMock";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


const ItemDetailContainer = () => {

    const {id} = useParams();

    const productSelected = products.find((element) => element.id === Number(id));

  return (

    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 500,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
    <Grid container spacing={0}>
      <Grid item>
        <ButtonBase sx={{ width: "800", height: "600" }}>
          <Img alt="complex" src={productSelected.img} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
                {productSelected.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
                {productSelected.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
              Añadir a cesta
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div">
            ${productSelected.price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
  )
}

export default ItemDetailContainer