import { useState } from 'react'
import './App.css'
import img from './assets/logo.png';

function App() {

  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  function handleSwitchCategory(id: number) {
    setCategoriaSelecionada(id);
  }

  function gerarFrase(){
    let randomNumber = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);

    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[randomNumber]}"`);
  }

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Todos os dias são uma oportunidade para recomeçar e para planejar um novo caminho. Siga com fé e acredite em você.',
        'A palavra “impossível” foi inventada para ser desafiada.',
        'Somos capazes de fazer muito mais do que imaginamos!',
        'Nós somos como o clima: feitos de dias de chuva e de sol!',
        'Há ainda tanta coisa linda na vida para se descobrir.',
        'Abra os olhos e aventure-se nessa jornada chamada vida!',
        'Há tantas pessoas que torcem por você na vida.'
      ]
    },
    {
      id: 2,
      nome: "Reflexão",
      frases: [
        'A jornada mais longa começa com um único passo.',
        'Pequenos gestos podem ter grandes impactos.',
        'A felicidade não é uma meta, mas uma bela jornada.',
        'Quando você muda a maneira como vê as coisas, as coisas que você vê mudam.',
        'O maior erro é continuar cometendo os mesmos erros.',
        'O verdadeiro conhecimento é saber que você não sabe tudo.'
      ]
    }
  ]

  return (
    <main className='container'>
      <img 
        src={img} 
        alt="logo frases" 
        className='logo'
        />

      <h2 className='title'>Categorias</h2>
      <section className='categoryArea'>
        {allFrases.map((category, index) => (
          <button 
            key={category.id}
            className='categoryButton'
            style={{
              borderColor: category.nome === allFrases[categoriaSelecionada].nome ? '#1fa4db' : '',
            }}

            onClick={() => handleSwitchCategory(index)}
              >
                {category.nome}
          </button>
        ))}
      </section>

      <button onClick={() => gerarFrase()} className='phraseButton'>Gerar frase</button>

      {textoFrase !== '' && <h3 className='phraseText'>{textoFrase}</h3>}
    </main>
  )
}

export default App
