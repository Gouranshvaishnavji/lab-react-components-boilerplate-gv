import React from 'react'

function Main(props) {
    const {imageData} = props
  return (
    <div>
    {
      imageData.map(image=>{
        return(
          <div key={image.id} className="column">
            <img src={image.img} alt="aesthetic picture"></img>
          </div>
        )
      })
    }
  </div>
  )
}

export default Main