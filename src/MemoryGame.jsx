import { useState, useEffect } from "react";
import "./MemoryGame.css";
import { InputButton } from "./StyledComponents";

function MemoryGame() {
  const [memory, setMemory] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    fetchCars();
  }, []);
  async function fetchCars() {
    //try-catch på async function så att allt är hämtat och klart
    try {
      const response = await fetch("cars.json");
      const result = await response.json();
      //skapar en variabel som tar emot resultatet två gånger med hjälp av spread
      let cars = [...result, ...result];
      //shufflar bilarna med en map(for-loop) https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      let shuffledCars = cars
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setMemory(shuffledCars);
    } catch (error) {
      console.log("error fetching cars", error);
    }
  }

  //varje gång man kör shuffle funktionen så körs fetchCars på nytt, alla kort blir flippade och score sätts till 0
  function shuffle() {
    fetchCars();
    setFlippedCards([]);
    setTurns(0);
  }
  function clickedCard(carIndex) {
    //om flippedCard innehåller samma index som man klickat på (alltså klickat på det redan öppna kortet) eller om flippedCards längd är lika med 2 så händer ingenting
    if (flippedCards.includes(carIndex) || flippedCards.length >= 2) {
      return;
    }
    setFlippedCards([...flippedCards, carIndex]);

    //gör en ny array med alla kort
    const newCardPair = memory.map((card, i) => {
      if (i === carIndex) {
        console.log("lagt till bolean");
        return { ...card, isFlipped: true };
      }
      return card;
    });

    // uppdaterar memory med det nya paret av kort som just har vänts upp.
    setMemory(newCardPair);

    if (flippedCards.length === 1) {
      //hämtar första kortet i flippedCard och tilldelar värdet till first card
      const firstCard = memory[flippedCards[0]];
      //hämtas från memory basserat på carIndex och tilldelar värdet till second car
      const secondCard = memory[carIndex];
      setTurns(turns + 1);
      //kollar om första och andra kortet matchar
      if (firstCard.id === secondCard.id) {
        console.log("Match found!");
        //återställer flipped card till en tom array
        setFlippedCards([]);
      } else {
        //ingen match hittad, återställer isFlipped till false efter en viss tid.
        console.log("No match!");
        setTimeout(() => {
          const resetCards = memory.map((card, i) => {
            if (flippedCards.includes(i)) {
              return { ...card, isFlipped: false };
            }
            return card;
          });
          setMemory(resetCards);
          setFlippedCards([]);
        }, 750);
      }
    }
  }

  return (
    <>
      <div id="top-content">
        <h1>Car Memory</h1>
        <InputButton type="button" value="New Game!" onClick={shuffle} />
        <div id="score-board">
          <h2 className="score-content">Score</h2>
          <h3 className="score-content">{turns}</h3>
        </div>
        <p>
          If you manage to finish the game in less than 8 turns you will get one
          point
        </p>
      </div>
      {memory !== null && (
        <div className="card-container">
          {memory.map((car, index) => (
            // lägget till klassen flipped om isFlipped = true
            <div
              key={index}
              onClick={() => clickedCard(index)}
              className="card"
            >
              {/* visar antingen front-bilden eller back-bilden beroende på om isFlipped är true eller false */}
              <img
                src={car.backImg}
                alt=""
                id={car.id}
                className={` front ${car.isFlipped ? "flipped" : ""}`}
              />
              <img
                src={car.frontImg}
                alt=""
                id={car.id}
                className={` back ${car.isFlipped ? "flipped" : ""}`}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default MemoryGame;
