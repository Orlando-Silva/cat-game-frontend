import React from 'react';
import { useIntl } from 'react-intl';
import { useCatSlideShow } from '../../../hooks/useCatSlideShow';

const Logo: React.FunctionComponent = () => {
  const intl = useIntl();
  const currentSlide = useCatSlideShow();

  return (
    <img
      className="animate-bounce"
      alt={intl.formatMessage({ id: 'ALT.CAT_LOGO' })}
      src={`/assets/cat-${currentSlide}.png`}
      width={200}
      height={200}
    />
  );
};

export default Logo;
