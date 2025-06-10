import React, { useEffect, useState } from "react";
import axios_instance from "../../helpers/apiconfig";

const CaloriesEntries = () => {
  const [caloriesEntries, setCaloriesEntries] = useState([]);

  useEffect(() => {
    getEntries();
  }, []);

  async function getEntries() {
    try {
      await axios_instance
        .get("/calories")
        .then((results) => {
          setCaloriesEntries(results);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <ul>
        {caloriesEntries.map((entry) => {
          <li>{entry.data}</li>;
        })}
      </ul>
    </>
  );
};

export default CaloriesEntries;
