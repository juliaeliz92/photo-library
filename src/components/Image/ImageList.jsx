import React from 'react';
import Image from './Image';
import { InlineLoading } from 'carbon-components-react';

const ImageList = ({photos}) => {
    if(photos.length === 0)
    return <InlineLoading description="loading" />;
    return photos.map((photo, index) => 
    <div className='bx--row' key={index} >
      <div className="bx--col-lg-16">
        <Image photo={photo} />
      </div>
    </div>
  );
}

export default ImageList;