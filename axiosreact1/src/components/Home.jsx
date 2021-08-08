import { useContext } from "react";
import { resData } from "../App";

export default function Home() {
  const {
    time,
    timevalidation,
    quote,
    RefreshQuotes,
    setToggleDetail,
    toggledetail,
  } = useContext(resData);

  return (
    <div className="home">
      <div className="home__quotes">
        <div>
          <h3>{quote.length > 0 && `"${quote[0].content}"`}</h3>
          <p>{quote.length > 0 && `"${quote[0].author}"`}</p>
        </div>
        <img
          onClick={() => RefreshQuotes()}
          src="/assets/desktop/icon-refresh.svg"
          alt="Refresh the quote"
        />
      </div>

      <div
        className={`home__detail ${toggledetail && "home__detail__triggered"}`}
      >
        <div className="home__detail__greeting">
          <h1>
            GOOD
            {timevalidation >= 12 && timevalidation < 18
              ? " AFTERNOON"
              : timevalidation >= 18 && timevalidation <= 23
              ? " EVENING"
              : timevalidation >= 0 && timevalidation < 12
              ? " MORNING"
              : ""}
            , IT'S CURRENTLY
          </h1>
          <span className="home__detail__greeting__time">{time}</span>
          <span className="home__detaik__greeting__abbreviation">
            {quote.length > 0 && `${quote[1].abbreviation}`}
          </span>
        </div>

        <button onClick={() => setToggleDetail((prevState) => !prevState)}>
          {toggledetail ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
}
