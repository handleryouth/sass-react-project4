import { useState, useEffect, createContext } from "react";
import axios from "axios";
import Home from "./components/Home";
import Detail from "./components/Detail";
import "./scss/main.scss";

export const resData = createContext();

export default function App() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggledetail, setToggleDetail] = useState(false);
  const [number, setNumber] = useState(() => Math.floor(Math.random() * 10));

  let time = quote.length > 0 && quote[1].datetime.slice(11, 16);
  let timevalidation = time && parseInt(time.slice(0, 2));

  console.log(quote);

  useEffect(() => {
    axios
      .all([
        axios.get("https://api.quotable.io/random"),
        axios.get("https://worldtimeapi.org/api/ip"),
        axios.get(
          "https://pixabay.com/api/?key=22826797-0e3c3eea9b85a7ce6aee2bbb7&image_type=photo&colors=black&orientation=horizontal&category=nature&min_width=1280&min_height=720&per_page=100"
        ),
      ])
      .then((res) => {
        setQuote(res.map((item) => item.data));
        setLoading(false);
        setInterval(() => {
          RefreshClock();
          setNumber(Math.floor(Math.random() * 100));
        }, 60000);
      })
      .catch((err) => console.log(err));
  }, []);

  function RefreshQuotes() {
    axios.get("https://api.quotable.io/random").then((res) => {
      setQuote((prevState) =>
        prevState.map((x, index) => (index === 0 ? res.data : x))
      );
    });
  }

  function RefreshClock() {
    axios.get("https://worldtimeapi.org/api/ip").then((res) => {
      setQuote((prevState) =>
        prevState.map((x, index) => (index === 1 ? res.data : x))
      );
    });
  }

  if (loading) {
    return <div className="container tumble"></div>;
  }
  return (
    <div className="app">
      <img
        className="app__background"
        src={quote.length > 0 && quote[2].hits[number].largeImageURL}
        alt="background illustration"
      />
      <resData.Provider
        value={{
          time,
          timevalidation,
          quote,
          RefreshQuotes,
          toggledetail,
          setToggleDetail,
        }}
      >
        <Home />
        <Detail />
      </resData.Provider>
    </div>
  );
}
