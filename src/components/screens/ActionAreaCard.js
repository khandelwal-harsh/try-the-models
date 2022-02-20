import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from "react-router-dom"


export default function ActionAreaCard(props) {
  var image = ""
  var backgroundColor = ""
  var apiType = ""
  const navigate = useNavigate()

  if (props.data === "Fire Detection" ){
    image="https://i.pinimg.com/originals/98/92/5f/98925f58c9db6a235530b1966e2bcfd8.jpg"
    backgroundColor = "white"
    apiType = "Fire Detection Api"
  }
  else if (props.data === "Mask Detection"){
    image="https://media.istockphoto.com/vectors/medical-face-mask-icon-vector-id1214356891?k=20&m=1214356891&s=612x612&w=0&h=3OgfJzuzfeOYFIUA1PwJeqT9RexaMP-_lIhm-LowATM="
    backgroundColor = "#2596be"
    apiType = "Mask Detection Api"
  }
  return (
    <Card  sx={{ width: 400,height: 400 }} onClick={()=>{navigate("/models",{state:{apiType:apiType}})}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={image}
        />
        <CardContent style={{backgroundColor:backgroundColor}}>
          <Typography 
            gutterBottom variant="h5" 
            component="div" 
            align='center' 
            fontFamily='Helvetica Neue'>
              {props.data}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
