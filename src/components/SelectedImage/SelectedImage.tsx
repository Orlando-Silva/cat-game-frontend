import React from 'react';

interface SelectedImageProps {
  source: string
}

const SelectedImage: React.FunctionComponent<SelectedImageProps> = ({ source }) => {
    return (
      <img width="400" height="400" src={source}></img>     
    )
  };
  
  export default SelectedImage;