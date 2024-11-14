import React from 'react';

type HeroTabProps = {
  text: string;
};

function HeroTab({ text }: HeroTabProps) {
  return (
    <div className='hero-tab'>
      {text}
    </div>
  );
}

export default HeroTab;