import { Typography } from '@mui/material';
import '../App.css';

export default function Product(props){
    return(
       <div className='App'>
        <Typography  variant="body2" backgroundColor="lightblue" padding ="10px"  gutterBottom>

       
        {props.id}<br/>
        {props.name}<br/>
        ${props.price}<br/>
         rated:{props.rating}<br/>
        category:{props.category}
        
        </Typography>

        </div>
      
    )
    
}