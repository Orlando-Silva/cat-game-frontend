import React, { useState } from 'react';

export interface LobbyTableDataProps {
  label: string;
  slot: 'filled' | 'avaliable';
}

const LobbyTableData: React.FunctionComponent<LobbyTableDataProps> = ({ 
  label,
  slot
}) => {

    const [dots, setDots] = useState(1);
    
    if(slot === `avaliable`) {
      setTimeout(() => {
        if(dots >= 3) {
          setDots(1);
          return;
        }

        setDots(dots + 1);
      }, 1000)
    }

    return (
      <div className='w-96 transition flex justify-center ease-in-out hover:-translate-y-1 hover:scale-110 rounded-md border bg-[#0069ff] border-sky-800 p-10'>
        <div className={(slot === 'filled' ? 'text-[#e7e05c] justify-center' : 'text-center') + ' flex flex-col gap-4'}>
          { label }
          {
            slot === `avaliable` && (
              <div className='flex space-x-1 justify-center'>
                <div className='h-2 w-2 bg-sky-50 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-2 w-2 bg-sky-50 rounded-full animate-bounce [animation-delay:-0.5s]'></div>
                <div className='h-2 w-2 bg-sky-50 rounded-full animate-bounce [animation-delay:-0.25]'></div>
              </div>
            )
          }
        </div>
      </div>
    )
  };
  
  export default LobbyTableData;