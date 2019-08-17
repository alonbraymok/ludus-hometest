import React, { useState } from 'react';



const Marker = (props) => {

    const { markerImage } = props
    

    return(
        <div>
            <img src={markerImage} style={{ width: 40, height: 40}}/>
        </div>
    )

}

export default Marker;