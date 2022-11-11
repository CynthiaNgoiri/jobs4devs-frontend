import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
    .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setSearchQuery(data);
      })
      .catch((err) => console.log(err));
  }, []);
    

  function handleSearch(e) {
    setCards(
      searchQuery.filter((cards) => {
        return (cards.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase()))
      })
    );
    return cards
  }

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card cards={cards} handleSearch={handleSearch} />

      </div>
      <Footer />
    </>
  );
}

export default App;
