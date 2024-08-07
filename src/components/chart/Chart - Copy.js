import Compare from "./Compare/Compare";
import Day from "./Day/Day";
import Daythree from "./Daythree/Daythree";
import Fullscreen from "./Fullscreen/Fullscreen";
import Max from "./Max/Max";
import Month from "./Month/Month";
import Week from "./Week/Week";
import Year from "./Year/Year";
import Monthsix from "./Monthsix/Monthsix";
import Img from "./Compare/27939.jpeg";
import Image from "./Euro-exchange-rate-vs-US-dollar.png";
import { useState } from "react";
function Chart() {
  let [isClicked, setClicked] = useState(false);
  let compareClicked = () => {
    setClicked(true);
  };
  return (
    <div className="mt-3">
      <div className="Parentchart d-flex flex-row justify-content-between">
        <div className="Screen d-flex flex-row justify-content-between">
          <Fullscreen />
          <Compare compareClicked={compareClicked} />
        </div>
        <div className="Time d-flex flex-row justify-content-evenly">
          <Day />
          <Daythree />
          <Week />
          <Month />
          <Monthsix />
          <Year />
          <Max />
        </div>
      </div>

      {isClicked === true ? (
        <img src={Img} alt="" width="900" height="500"></img>
      ) : (
        <img src={Image} alt="" width="900" height="500"></img>
      )}
    </div>
  );
}
export default Chart;

{
  /* <Routes>
        <Route path="/Compare" element={<Compare />} />
        <Route path="/Day" element={<Day />} />
        <Route path="/Daythree" element={<Daythree />} />
        <Route path="/Fullscreen" element={<Fullscreen />} />
        <Route path="/Max" element={<Max />} />
        <Route path="/Month" element={<Month />} />
        <Route path="/Week" element={<Week />} />
        <Route path="/Year" element={<Year />} />
      </Routes> */
}
