import React from 'react';
import CatImage from '../CatImage/CatImage';
import { Image } from '../../interfaces/Image';

interface CatImageListProps {
  images: Image[]
  onSelectCat: (image: string) => void
}

const CatImageList: React.FunctionComponent<CatImageListProps> = ({ images, onSelectCat }) => {

    return (
      <div className='flex flex-row justify-center gap-4'>
          { 
            images.map((image: Image) => {
              return (
                <CatImage data-testid={`cat-image-${image.id}`} key={image.id} source={image.source} onSelectCat={() => onSelectCat(image.source) } ></CatImage>
              )
            })
          }
        </div>     
    )
  };
  
  export default CatImageList;