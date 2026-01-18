// src/app/page.jsx
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import WeeklyTopNFT from './components/WeeklyTopNFT';
import CreateSellNFT from './components/CreateSellNFT/CreateSellNFT';
import Footer from './components/Footer/Footer';
import st from './page.module.css'

export default function Home() {
  return (
    <div className={st.container}>
      <Header />
      <Hero />
     
      <WeeklyTopNFT />
      <CreateSellNFT />
      <Footer />
    </div>
  );
}