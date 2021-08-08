import { useContext } from "react";
import Media from "react-media";
import { resData } from "../App";
import DetailChildren from "./DetailChildren";

export default function Detail() {
  const { quote, toggledetail, setToggleDetail } = useContext(resData);

  let day = quote[1];
  return (
    <div className={`detail ${toggledetail && "detail__triggered"}`}>
      <DetailChildren title="CURRENT TIMEZONE" value={day.timezone} />
      <DetailChildren title="DAY OF THE YEAR" value={day.day_of_year} />
      <DetailChildren title="DAY OF THE WEEK" value={day.day_of_week} />
      <DetailChildren title="WEEK NUMBER" value={day.week_number} />
      <Media query="(max-height: 737px)">
        {(matches) =>
          matches && (
            <button
              className="detail__button"
              onClick={() => setToggleDetail((prevState) => !prevState)}
            >
              Close
            </button>
          )
        }
      </Media>
    </div>
  );
}
