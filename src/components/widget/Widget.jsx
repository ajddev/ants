import "./index.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FolderIcon from "@mui/icons-material/Folder";
import BugReportIcon from "@mui/icons-material/BugReport";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

const Widget = ({ type }) => {
  let data;

  // temp
  const amount = 27;
  const diff = 50;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(69, 77, 102, 0.5)",
              color: "rgb(41, 46, 61)",
            }}
          />
        ),
      };
      break;
    case "project":
      data = {
        title: "PROJECTS",
        isMoney: false,
        link: "View all projects",
        icon: (
          <FolderIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 216, 115, 0.5)",
              color: "rgb(101, 99,27)",
            }}
          />
        ),
      };
      break;
    case "ticket":
      data = {
        title: "TICKETS",
        isMoney: false,
        link: "View all tickets",
        icon: (
          <BugReportIcon
            className="icon"
            style={{
              backgroundColor: "rgba(87, 178, 104, 0.5)",
              color: "rgb(56,122,68",
            }}
          />
        ),
      };
      break;
    case "release":
      data = {
        title: "RELEASES",
        isMoney: false,
        link: "View all releases",
        icon: (
          <NewReleasesIcon
            className="icon"
            style={{
              backgroundColor: "rgba(48, 153, 117, 0.5)",
              color: "rgb(31,97,74)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {Math.round(Math.random() * amount)}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {Math.round(Math.random() * diff)} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
