import "./index.scss";
import SvgLogo from "../../assets/images/ants.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import FolderIcon from "@mui/icons-material/Folder";
import BugReportIcon from "@mui/icons-material/BugReport";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">
            <img src={SvgLogo} alt="ANTS" />
          </span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>DASHBOARD</span>
            </li>
          </Link>
          <p className="title">INTERFACE</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>USERS</span>
            </li>
          </Link>
          <li>
            <FolderIcon className="icon" />
            <span>PROJECTS</span>
          </li>
          <Link to="/tickets" style={{ textDecoration: "none" }}>
            <li>
              <BugReportIcon className="icon" />
              <span>TICKETS</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <li>
            <NotificationsIcon className="icon" />
            <span>NOTIFICATIONS</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>STATS</span>
          </li>
          <li>
            <AssignmentIcon className="icon" />
            <span>LOGS</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>SETTINGS</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>PROFILES</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>LOGOUT</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="color-option"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
