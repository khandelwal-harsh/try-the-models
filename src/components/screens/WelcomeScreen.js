import Button from '@mui/material/Button';
import "../../App.css";
import { useNavigate } from 'react-router-dom';


const WelcomeScreen = () =>{
    const navigate = useNavigate()

    return (
        <div>
        <div className="welcomeBlackScreen">
         <div className="text">
             <h1 className="welcome-text"> Welcome to the Try the models</h1>
            </div> 
        </div>
        <div className="welcomeWhiteScreen">
             <Button 
             style={{color:"white",backgroundColor:"black",height:"50px",width:"max-content"}} 
             variant="contained"
             onClick={()=>{navigate("/modellists")}}
             >Get Started
             </Button>
        </div>        
        </div>

    )
}

export default WelcomeScreen;