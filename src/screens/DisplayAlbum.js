import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DisplayAlbum() {
    const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/createalbum')
    .then((res)=>setData(res.data))
    .catch((err)=>{console.log(err)})
  })
  return (
    <div className="container">
     
      {
        data.map((singleData)=>{
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array((singleData.img.data.data)))
          );
          return(
            <>
            <img src={`data:image/jpeg;base64,${base64String}`}/>
            <p>{singleData.description}</p>
            </>
          )
        })
      }
    </div>
  )
}

export default DisplayAlbum
