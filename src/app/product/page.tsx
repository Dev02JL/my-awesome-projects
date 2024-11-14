import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Offer from '@/components/Offer'
import React from 'react'

export default function Product() {
  return (
    <div className="p-4">
      <Header/>
      <main className="pt-16 pl-28">
        <div className="flex">
            <h2 className="text-mg underline">UNIQLO </h2>
            <h2 className="text-mg"> / Les offres en lots</h2>
        </div>
        <div className="pt-8">
            <h1 className="text-2xl">Les offres en lots</h1>
            <h2 className="text-mg pt-4">Faites le plein de basiques et gagnez plus en dépensant moins grâce à nos offres spéciales lots</h2>
            <div className="pt-4 w-100 border-b border-gray-300"/>
        </div>
        <Offer title="CHAUSSETTES UT KAWS + Warhol" price="2 pour 9,90€"/>
        <Offer title="CHAUSSETTES HEATTECH POUR FEMME" price="2 pour 12,90 €"/>
        <Offer title="Chaussettes HEATTECH pour hommes dont les modèles signés JW Anderson" price="2 pour 12,90€"/>
        <Offer title="CHAUSSETTES POUR HOMME" price="4 pour 12,90€"/>
        <Offer title="BOXERS & CALEÇONS POUR HOMME" price="2 pour 12,90€"/>
        <Offer title="CHAUSSETTES À MOTIFS POUR HOMME" price="3 pour 12,90€"/>
        <Offer title="SOCQUETTES POUR HOMME" price="3 pour 12,90€"/>
        <Offer title="BODYS POUR BÉBÉ" price="2 pour 12,90€"/>
      </main>
      <Footer/>
    </div>
  )
}