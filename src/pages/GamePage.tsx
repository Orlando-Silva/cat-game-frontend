import React, { useEffect, useState } from 'react';
import { getImages } from '../services/image.service';
import CatImageList from '../components/CatImageList/CatImageList';
import CatPhraseList from '../components/CatPhraseList/CatPhraseList';
import SelectedImage from '../components/SelectedImage/SelectedImage';
import SelectedPhrase from '../components/SelectedPhrase/SelectedPhrase';
import GameTitle from '../components/GameTitle/GameTitle';
import { Image } from '../interfaces/Image';
import { getPhrases } from '../services/phrase.service';
import { Phrase } from '../interfaces/Phrase';

const GamePage: React.FunctionComponent = () => {
    const [selectedCat, setSelectedCat] = useState('');
    const [selectedPhrase, setSelectedPhrase] = useState('');
    const [images, setImages] = useState<Image[]>([]);
    const [phrases, setPhrases] = useState<Phrase[]>([]);

    useEffect(() => {
      getImages().then(
        (response) => {
          setImages(response.data);
        }
      );

      getPhrases().then((response) => {
        setPhrases(response.data);
      })

    }, []);

    return (
      
      <div className='flex flex-col justify-center gap-8 h-dvh'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <GameTitle></GameTitle>
          <div className=' border border-white/5 bg-slate-800/25 rounded-xl p-6 text-center items-center'>
            {selectedCat && selectedPhrase ? (
              <div className="flex flex-col gap-2">
                <SelectedImage source={selectedCat}></SelectedImage>
                <SelectedPhrase phrase={selectedPhrase}></SelectedPhrase>
              </div>
            ) : (
              <div className="text-white">
                Escolha um gato e uma frase para começar!
              </div>
            )}

          </div>  
        </div>
        <CatImageList images={images} onSelectCat={(image: string) => setSelectedCat(image) }></CatImageList>
        <CatPhraseList phrases={phrases} onSelectPhrase={(phrase: string) => setSelectedPhrase(phrase) }></CatPhraseList>
      </div>
    )
  };
  
  export default GamePage;