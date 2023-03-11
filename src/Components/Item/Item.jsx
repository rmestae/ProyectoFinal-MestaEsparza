import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

const Item = ({element}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={element.img}
        alt={element.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">{element.description}</Typography>
        <Typography variant="body" color="text.secondary">{element.price}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Link to ={`/item/${element.id}`}>
            <Button size="small" color="primary" variant="contained">
                Ver Detalle
            </Button>
        </Link>
    </CardActions>
  </Card>
  )
}

export default Item