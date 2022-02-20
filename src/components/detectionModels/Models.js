import  "../../App.css"
import Button from '@material-ui/core/Button';
import React from "react";
import {useState,useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom"
import UploadButtons from "../screens/UploadButton"
import LinearWithValueLabel from "../screens/ProgressBar";


const Models = () =>{
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    const {state} = useLocation()
    const {apiType} = state
    const updateImage = event =>{
        setImage(event.target.files[0])
    }
    const navigate = useNavigate()

    useEffect(()=>{
        if (url){
        fetch("http://0.0.0.0:5000/send_image_input",{
            method:"Post",
            headers: {
                'Content-Type': 'application/json',
              },            
            body:JSON.stringify({
                image:url,
                image_type:"url"
            })
        }).then(res=>res.json())
        .then(data=>{
            navigate("/result",{state:{url:data.data.url,model:"Fire Detection"}})

        })
        .catch(err=>(
            console.log(err)
        ))        }
    },[url])
    const uploadImage = () =>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","instaimages") 
       
        fetch("https://api.cloudinary.com/v1_1/instaimages/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
            console.log(data.url)
        })
        .catch(err=>{
            console.log(err)

        })
    }

    return (
        <div className="header">
            <h1 style={{"text-align":"center"}}>Test {apiType}</h1>
            <div className="container">
            <input
                accept="image/*"
                type="file"
                onChange={updateImage}
                />
                {image && (
                <div style={styles.preview}>
                    <img
                    src={URL.createObjectURL(image)}
                    style={styles.image}
                    alt="Thumb"
                    />
                    <Button className="btn waves-effect waves-light test" onClick={uploadImage} style={styles.delete}>
                    Upload file
                    </Button>
                    <LinearWithValueLabel value={uploadImage} />
                </div>
                )}
            </div>
        </div>
    )
}

export default Models

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    preview: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
    //   border: "10px solid red",
    },
    image: { maxWidth: 800, maxHeight: 400 ,marginLeft:300},
    delete: {
      cursor: "pointer",
      text:"white",
      marginTop:10,
      maxWidth:200,
      marginLeft:600,
      backgroundColor: "white"
    },
  };