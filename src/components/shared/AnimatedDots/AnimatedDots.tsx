import React from 'react';

const AnimatedDots: React.FunctionComponent = () => (
  <div className="flex space-x-1 justify-center">
    <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
    <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.5s]" />
    <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.25]" />
  </div>
);

export default AnimatedDots;
