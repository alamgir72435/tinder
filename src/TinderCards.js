import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import database from "./firebase";
const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // this is where the code runs...
    const unsubscribe = database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
    // this will run once when the component loads, and never again
    return () => {
      // this is the cleanup..
      unsubscribe();
    };
  }, []);
  console.log(people);
  return (
    <div>
      <div className="card__container">
        {people.map((person, index) => (
          <TinderCard
            preventSwipe={["up", "down"]}
            className="swipe"
            key={index}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name} </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
