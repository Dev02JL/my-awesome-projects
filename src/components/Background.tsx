import React from 'react'
import Image from 'next/image'

type BackgroundProps = {
    src: string;
    title?: string; // optionnel
  };
function Background({ src, title }: BackgroundProps) {
  return (
    <div>
      <section className="snap-section">
          <Image
            fill className="object-cover" 
            src={src}
            alt="Picture of the author"
          />
          <div className="title-section">{title}</div>
        </section>
    </div>
  )
}

export default Background
