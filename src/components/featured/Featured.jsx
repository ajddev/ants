import "./index.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Progress</h1>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={4}
            styles={{
              path: {
                stroke: "#679186",
              },
              text: {
                fill: "#679186",
              },
            }}
          />
        </div>
        <p className="title">Time Left</p>
        <p className="amount">53 days</p>
        <p className="desc">Productivity based upon average work velocity:</p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Last Day</div>
            <div className="item-result negative">
              <KeyboardArrowDownIcon fontSize="100%" />
              <div className="result-amount">13%</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result positive">
              <KeyboardArrowUpIcon fontSize="100%" />
              <div className="result-amount">45%</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result positive">
              <KeyboardArrowUpIcon fontSize="100%" />
              <div className="result-amount">27%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
