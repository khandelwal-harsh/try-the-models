import React from "react";
import  "../../App.css"
import ActionAreaCard from "./ActionAreaCard"

const ListModels = () =>{
    return (
        <div className="listModels">
            <h2 className="header ">Models</h2>
            <div className="cards">
                <ActionAreaCard data={"Fire Detection"}></ActionAreaCard>
                <ActionAreaCard data={"Mask Detection"}></ActionAreaCard>
                <ActionAreaCard data={"Mask Detection"}></ActionAreaCard>
                <ActionAreaCard data={"Mask Detection"}></ActionAreaCard>
                <ActionAreaCard data={"Mask Detection"}></ActionAreaCard>
            </div>
        </div>
    )
}

export default ListModels;