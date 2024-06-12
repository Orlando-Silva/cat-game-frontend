import React from 'react';
import CatLogo from '../CatLogo/CatLogo';


const Header: React.FunctionComponent = () => {
    return (
      <header className='p-2 sticky gap-2 flex lg:border-b lg:border-slate-900/10'>
        <CatLogo size='sm'></CatLogo>
        Cat Game
      </header>  
    )
  };
  
  export default Header;