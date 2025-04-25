import React, { useState } from 'react';
import './ComoAjudar.css';

function ComoAjudar() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <section id="como-ajudar" className="como-ajudar-section">
      <h2>Como Ajudar</h2>
      <p className="intro">
        Sua colaboração faz toda a diferença! Descubra como você pode contribuir com nosso projeto.
      </p>

      <div className="ajuda-grid">
        {/* Doações Financeiras */}
        <div className="ajuda-card">
          <h3>💸 Doações Financeiras</h3>
          <p>
            Você pode apoiar nosso trabalho com uma contribuição financeira. Qualquer valor ajuda!
          </p>
          <ul className="info-list">
            <li><strong>PIX:</strong> 123.456.789-00</li>
            <li><strong>Banco:</strong> Banco do Brasil</li>
            <li><strong>Agência:</strong> 1234-5</li>
            <li><strong>Conta:</strong> 67890-1</li>
          </ul>
          <button className="doar-btn">Quero Doar</button>
        </div>

        {/* Voluntariado */}
        <div className="ajuda-card">
          <h3>🤝 Seja Voluntário</h3>
          <p>
            Temos diversas formas de voluntariado: dar aulas, contar histórias, ajudar com eventos ou simplesmente participar!
          </p>
          <button className="voluntario-btn" onClick={toggleFormulario}>
            {mostrarFormulario ? 'Fechar' : 'Quero Ser Voluntário'}
          </button>

          {mostrarFormulario && (
            <form className="form-voluntario">
              <input type="text" placeholder="Nome" required />
              <input type="text" placeholder="Sobrenome" required />
              <input type="email" placeholder="E-mail" required />
              <input type="tel" placeholder="Celular (com DDD)" required />
              <button type="submit" className="enviar-btn">Enviar</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ComoAjudar;
