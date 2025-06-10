import React, { useEffect, useState } from "react";
import axios_instance from "../../helpers/apiconfig";

const RecipesList = () => {
  const [recipesEntries, setRecipesEntries] = useState([]);

  useEffect(() => {
    getEntries();
  }, []);

  async function getEntries() {
    try {
      await axios_instance
        .get("recipes")
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Failed to fetch items");
          }
          console.log(res.data.entries);
          setRecipesEntries(res.data.entries);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ul>
        {recipesEntries.map((x, index) => {
          <>
            <li key={index}>
              {console.log(x.name)}
              {console.log(x.calories)}
              <h1>{x.name}</h1>
              <p>{x.calories}</p>
              <p>
                {/* <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      console.log(selectedEntry);
                      showDeleteModal();
                    }}
                  >
                    Delete
                  </Button> */}
              </p>
            </li>
          </>;
        })}
      </ul>
    </>
  );
};

export default RecipesList;
