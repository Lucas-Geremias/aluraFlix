import React from 'react';
import Menu from './components/Menu/Index';
import dadosIniciais from './data/dados_Iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
     <Menu />

     <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O que é Front-end?"} />

    <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
    />
    </div>
  );
}

export default App;
