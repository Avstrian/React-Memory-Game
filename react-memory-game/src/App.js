import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

//Cards
import blueEyes from './assets/blue-eyes.png';
import darkMagician from './assets/dark-magician.jpg';
import exodia from './assets/exodia.png';
import jinzo from './assets/jinzo.png';
import kuriboh from './assets/kuriboh.png';
import morphingJar from './assets/morphing-jar.jpg';
import obelisk from './assets/obelisk.jpg';
import ra from './assets/ra.jpg';
import redEyes from './assets/red-eyes.jpg';
import slifer from './assets/slifer.jpg';
import summonedSkull from './assets/summoned-skull.jpg';
import timeWizard from './assets/time-wizard.jpg';
import Scoreboard from './components/Scoreboard';


const App = () => {

  const cardArray = [
    { url: blueEyes, clicked: false },
    { url: darkMagician, clicked: false },
    { url: exodia, clicked: false },
    { url: jinzo, clicked: false },
    { url: kuriboh, clicked: false },
    { url: morphingJar, clicked: false },
    { url: obelisk, clicked: false },
    { url: ra, clicked: false },
    { url: redEyes, clicked: false },
    { url: slifer, clicked: false },
    { url: summonedSkull, clicked: false },
    { url: timeWizard, clicked: false }
  ];


  const [score, setScore] = useState({
    currentScore: 0,
    highScore: 0,
  });

  const [cards, setCards] = useState(cardArray);

  useEffect(() => {

    const handleCardClick = (event) => {
      if (event.target.className.includes('card')) {
        if (checkIfClicked(cards, event.target.id)) {
          clearCards(cards);

          let currentPoints = score.currentScore;

          if (currentPoints > score.highScore) {
            setScore({ currentScore: 0, highScore: currentPoints });
          } else {
            setScore({ ...score, currentScore: 0 });
          }

        } else {
          setScore({ ...score, currentScore: score.currentScore + 1 })
        }

        setCards(shuffleCards(cards));
      }
    };

    const checkIfClicked = (cards, id) => {
      for (let card of cards) {
        if (card.url === id && !card.clicked) {
          setCards([...cards, card.clicked = true]);

          return false;
        } else if (card.url === id && card.clicked) {
          return true;
        }
      }
    };

    const shuffleCards = (cards) => {
      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }

      return cards;
    };

    const clearCards = (cards) => {
      for (let card of cards) {
        setCards([...cards, card.clicked = false]);
      }
    }

    shuffleCards(cardArray);
    document.addEventListener('click', handleCardClick);

    return () => {
      document.removeEventListener('click', handleCardClick);
    };
  });

  return (
    <div className="main-container">
      <h1 className="title">Yu-Gi-Oh Memory Game</h1>
      <p className="gold-text">Get points by clicking on a monster card but don't click on a card more than once!</p>

      <Scoreboard score={score} />

      <div className="card-container">
        {cards.map(item => <Card image={item.url} />)}
      </div>
    </div>
  );
}

export default App;
