import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

export const SprinnerLoading = ({ color="#3592df", loading=false  }) => {
  
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center"
    }}>
      <BeatLoader color={color} loading={loading}  size={25} speedMultiplier={1} />
    </div>
    
  )
}
