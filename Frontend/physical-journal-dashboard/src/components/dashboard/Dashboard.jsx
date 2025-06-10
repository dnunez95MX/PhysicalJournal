import logo from "../../logo.svg";
import "../../App.css";
import axios_instance from "../../helpers/apiconfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      ) : null}
      <div style={{ width: "80%" }}></div>
      <div style={{ width: "20%", float: "right" }}>
        <ul>
          <li>
            <Link to="/weight-entries">Manage Entries</Link>
          </li>
          <li>
            <Link to="/add-weight">Add Entry</Link>
          </li>
          <li>
            <Link to="/weight">Get Entry</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/calories">Calories Entries</Link>
          </li>
          <li>
            <Link to="/add-calories-entry">Add Calories Entry</Link>
          </li>
          <li>
            <Link to="/calories-date">Get Calories Entry by date</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/recipes">Manage Recipes</Link>
          </li>
          <li>
            <Link to="/add-recipe">Add Recipe</Link>
          </li>
          <li>
            <Link to="/weight">Get Entry</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
