import React,{useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useMenu, useMenuUpdate } from '../Contexts/MenuContext'


const images = [
  "https://picsum.photos/2000/3000",
  "https://picsum.photos/3000/2000",
  "https://picsum.photos/2000/3000",
  "https://picsum.photos/3000/1500",
  "https://picsum.photos/4000/2500",
  "https://picsum.photos/3000/2000"
]


const Galerija = () => {

  const setMenu = useMenu();

  const [data, setData] = useState({img:'', i:0})

  const viewImage = (img,i)=>{
    setData({img,i})
  }
  
  const imgAction = (action)=>{
    let i = data.i;
    if(action == 'next-img'){
      setData({img: images[i+1], i: i+1});
    }
    if(action == 'previous-img'){
      setData({img:images[i-1], i:i-1});
    }
    if(!action){
      setData({img:'', i: i=0});
    }
  }

  return (
    <div className={setMenu === false ? "galerija":"galerija active"}>

      {data.img &&
      <div className={setMenu === false ? "pictureZoomed":"pictureZoomed active"}>
        <button className='btnPrevious' onClick={()=> imgAction('previous-img')}>Previous</button>
        <button className='btnClose' onClick={()=>imgAction()}>X</button>
        <img src={data.img} className='picture'/>
        <button className='btnNext' onClick={()=> imgAction('next-img')}>Next</button>
      </div>
      }



      <div className='pictureContainer'>
      <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry className='pictureBox' gutter='20px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block",cursor:'pointer'}}
                            alt=""
                            onClick={()=> viewImage(image,i)}
                        />
                    ))}
                </Masonry>
      </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Galerija
