import { useLocation } from "react-router-dom";

const Result = () =>{
    const {state} = useLocation();
    const {url,model} = state
    console.log(url)    
    return (
        <div>
            <h1 style={{"marginLeft":600}}>Result of {model}</h1>
            <img
            src={url}
            style={styles.image}
            alt="Thumb"
            />
        </div>

    )
}

export default Result;

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
    },
    image: { maxWidth: 1000, maxHeight: 500 ,marginLeft:350, marginTop: 100},
    delete: {
      cursor: "pointer",
      padding: 15,
      text:"white",
      marginTop:10,
      maxWidth:200,
      marginLeft:700
    },
  };