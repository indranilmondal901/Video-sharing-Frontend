import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Card = () => {
  const [item, setItem] = useState([])
  useEffect(() => {
    axios.get("https://tuner.onrender.com/")
      .then((res) => {
        // console.log(res.data.data[0].video.vfile)
        console.log(res.data.data)
        // setItem(res.data.data[0].video.vfile)
        setItem(res.data.data)
      })
  }, [])
  return (
    <div>
      {item.map((res,i) => {
        return <>
          <div key={i} className="card-video">
            <video src={res.video.vfile} height="200px" width="300px" controls></video>
            <p>{res.video.name} [{res.video.category}]</p>
          </div>
        </>
      })}
    </div>
  )
}
export default Card;







