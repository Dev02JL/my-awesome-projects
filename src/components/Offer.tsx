import React from 'react'

type OfferProps = {
    title: string;
    price: string;
  };
function Offer({title, price}: OfferProps) {
  return (
    <div className="pt-8">
      <h1 className="text-3xl">{title}</h1>
      <h2 className="text-mg pt-2">{price}</h2>
      <h3 className="underline pt-2">Voir toutes les offres en lot</h3>
      <div className="pt-4 w-100 border-b border-gray-300"/>
    </div>
  )
}

export default Offer
