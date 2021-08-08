import { useContext } from "react";
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
      <button onClick={() => setToggleDetail((prevState) => !prevState)}>
        Close
      </button>
    </div>
  );
}
