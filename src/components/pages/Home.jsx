import Hero from "../section/Hero";
import Progams from '../section/Progam'
import Stats from '../section/Stats'
import VisiMisi from '../section/VisiMisi'
import Gallery from '../section/Gallery'
import Testimoni from "../section/Testimoni";
import Footer from "../section/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Progams/>
      <Stats/>
      <VisiMisi/>
      <Gallery/>
      <Testimoni/>
      <Footer/>
    </>
  )
}