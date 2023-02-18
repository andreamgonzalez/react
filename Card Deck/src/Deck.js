import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css";

const API_BASE_URL = "http://deckofcardsapi.com/api/deck";

/* Deck: uses deck API, allows drawing card at a time. */

function Deck() {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);
  const [autoDraw, setAutoDraw] = useState(false);
  const timerRef = useRef(null);

  /* At mount: load deck from API into state. */
  useEffect(() => {
    async function getData() {
      let d = await axios.get(`${API_BASE_URL}/new/shuffle/`);
      setDeck(d.data);  //update state with shuffled deck (saves/updates to deck)
    }
    getData();
  }, [setDeck]); //runs whenever setDeck has a change

  /* Draw one card every second if autoDraw is true */
  useEffect(() => {
    /* Draw a card via API, add card to state "drawn" list */
    async function getCard() {
      let { deck_id } = deck; //destructures deck_id from deck previousl updated in effect above

      try {
        let drawRes = await axios.get(`${API_BASE_URL}/${deck_id}/draw/`); //use deck_id from above to draw a single card from the deck

        if (drawRes.data.remaining === 0) {
          setAutoDraw(false);
          throw new Error("no cards remaining!");
        }

        const card = drawRes.data.cards[0]; //saves the api response (aka the drawn card(s) from the deck) to the card variable

        setDrawn(d => [ //takes everything currently in in d (drawn), and add to it the latest card details
          ...d,
          {
            id: card.code,
            name: card.suit + " " + card.value,
            image: card.image
          }
        ]);
      } catch (err) {
        alert(err);
      }
    }

    if (autoDraw && !timerRef.current) { //if autDar is true and timerRef does not have "current" key, call the getCard function each second
      timerRef.current = setInterval(async () => {
        await getCard();
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [autoDraw, setAutoDraw, deck]); //runs effect whenever autoDraw, setAutoDraw, or deck have a change

  const toggleAutoDraw = () => {
    setAutoDraw(auto => !auto); //toggle for user picking whether autoDraw is true or false , sets it to the opposite of what it was before click or is currently
  };

  const cards = drawn.map(c => ( //loops through all the draws in the drawn array and creates a Card component for each
    <Card key={c.id} name={c.name} image={c.image} />
  ));

  //checks that deck is not null (aka has cards from api),if not null, it then appends a button element for enabling/disabling autoDraw
  // then places the Crad component for each card in the drawn cards array inside the Deck-cardarea element. This looks fancier with css
  return ( 
    <div className="Deck">
      {deck ? (
        <button className="Deck-gimme" onClick={toggleAutoDraw}>
          {autoDraw ? "STOP" : "KEEP"} DRAWING FOR ME!
        </button>
      ) : null}
      <div className="Deck-cardarea">{cards}</div> 
    </div>
  );
}

export default Deck;
