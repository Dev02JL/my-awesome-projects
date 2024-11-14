import React from 'react';

type IconProps = {
  src: string;
  alt?: string; // optionnel
  onClick?: () => void; // fonction de clic optionnelle
};

function Icon({ src, alt = '', onClick }: IconProps) {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <img src={src} alt={alt} className='icon' />
    </div>
  );
}

export default Icon;