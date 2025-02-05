import React from "react"
import Header from "@/components/Header";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <div className="text-white">
        <Header/>
        <main className="snap-container">
          <Background src="/background.jpg" title="Cachemire + GitHub Action"/>
          <Background src="/hybrideground.jpg" title="Manteau Hybride"/>
          <Background src="/doudouneground.jpg" title="Doudounes"/>
        </main>
      </div>
      <Footer/>
    </div>
  );
}