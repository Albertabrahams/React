import React from 'react'

var date = new Date();
var dateString = date.toLocaleDateString("tr-TR")
var timeString = date.toLocaleTimeString("tr-TR")

function Clock() {
  return (
    <div style={{ textAlign: "center", backgroundColor:'black', color:"red", fontSize:"2rem"} }>
        {dateString}<br/>
        {timeString}
    </div>
  )
}

export default Clock