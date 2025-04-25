import React from 'react';
import './Historia.css';

function Historia() {
  return (
    <section id="historia" className="historia-section">
      <div className="historia-content">
        <div className="historia-text">
          <h2>Nossa História</h2>
          <p>
            Fundado com o objetivo de transformar vidas, nosso projeto nasceu do desejo de fazer a diferença na comunidade.
            Acreditamos na força da educação, cultura e do trabalho colaborativo para promover mudanças reais e duradouras.
          </p>
          <p>
            Ao longo dos anos, envolvemos voluntários, famílias e parceiros para ampliar nosso impacto e alcançar mais pessoas.
            Cada passo da nossa trajetória é construído com dedicação, emasdasdadasdadasdadsapatia e o compromisso de fazer mais e melhor.
          </p>
        </div>
        <div className="historia-images">
        <img src="/public/images.jpg" alt="Imagem 1" />
        <img src="/public/robert-collinsh.jpg" alt="Imagem 2" />
        </div>
      </div>
    </section>
  );
}

export default Historia;
