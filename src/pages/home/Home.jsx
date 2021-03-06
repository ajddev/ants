import "./index.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="project" />
          <Widget type="ticket" />
          <Widget type="release" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Completed Projects)" aspect={3 / 1} />
        </div>
        <div className="list-container">
          <div className="list-title">Latest Tickets</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
