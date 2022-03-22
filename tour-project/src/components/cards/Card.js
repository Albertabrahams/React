import React from 'react'
import "./Card.css"

const Card = ({data}) => {
    console.log(data);
  return (
    <div className='container'>
      {data.map((el)=>{
        const {id,desc,image,title}=el
        return(
          <div className='card' key={id}>
            <h1 className="title">{title} </h1>
            <img src={image} className="img"/>
            <p className="desc">{desc}</p>
          </div>
        )
      })}

    </div>
  )
}

export default Card