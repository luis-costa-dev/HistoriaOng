import React, { useState } from 'react';
import './Atividades.css';

const atividadesData = [
  {
    id: 1,
    titulo: 'Aula de Arte',
    imagem: '/img/arte.jpg',
    descricao: 'Atividades artísticas desenvolvem a criatividade e a expressão das crianças por meio de pintura, escultura e colagem.'
  },
  {
    id: 2,
    titulo: 'Esporte e Movimento',
    imagem: '/public/correndo.jpg',
    descricao: 'Promovemos saúde e trabalho em equipe através de práticas esportivas adaptadas para todas as idades.'
  },
  {
    id: 3,
    titulo: 'Contação de Histórias',
    imagem: '/img/historia.jpg',
    descricao: 'Desenvolvemos a imaginação e o gosto pela leitura com momentos lúdicos de contação de histórias.'
  }
];

function Atividades() {
  const [atividadeAtiva, setAtividadeAtiva] = useState(null);

  const toggleDescricao = (id) => {
    setAtividadeAtiva(atividadeAtiva === id ? null : id);
  };

  return (
    <section id="atividades" className="atividades-section">
      <h2>Atividades</h2>
      <div className="atividades-grid">
        {atividadesData.map((atividade) => (
          <div
            key={atividade.id}
            className="atividade-card"
            onClick={() => toggleDescricao(atividade.id)}
          >
            <img src={atividade.imagem} alt={atividade.titulo} />
            <h3>{atividade.titulo}</h3>
            {atividadeAtiva === atividade.id && (
              <p className="descricao">{atividade.descricao}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Atividades;
