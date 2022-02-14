import React from 'react';

const Image = ({photo}) => {
    return(<div className='photo-container'>
        <img 
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
        />
        <div className='photo-detail-container'>
            <h4><b>Title: </b>{photo.title}</h4>
        </div>
    </div>)
}

export default Image;