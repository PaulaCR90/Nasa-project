import React from 'react'
import { Fade } from 'react-slideshow-image'

const SlideShow = ({ MarsBox }) => {
  return (
    <div className='slide-container'>
        <Fade>
            {MarsBox.map((photo) => {
                <div className='each-slide' key={photo.id}>
                    <div style={{'backgroundImage': `url(${photo.img_src})` }}>
                <span>Curiosity camera: {photo.camera.name}</span>
              </div>
                </div>
            })}
        </Fade>
    </div>
  )
}

export default SlideShow;