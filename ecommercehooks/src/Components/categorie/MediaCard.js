import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button';
const MediaCard = ({categorie}) => {
  return (
    <div>
       <Card sx={{ maxWidth: "auto", margin:1}}>
          <CardMedia
                component="img"
                alt="image"
                height="160"
               image={categorie.imagecategorie} 
                 />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            
            </Typography>
            <Typography variant="body2" color="text.secondary">
                  {categorie.nomcategorie} 
              </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </div>
  )
}

export default MediaCard
