import { Route, Routes } from "react-router-dom";
import "./App.css";
import "@ant-design/v5-patch-for-react-19";
import Dashboard from "./routes/dashboard/Dashboard";
import WeightEntriesList from "./pages/Weight/WeightEntriesList";
import CreateWeightEntry from "./pages/Weight/CreateWeightEntry";
import GetWeightEntryByDate from "./pages/Weight/GetWeightEntryByDate";
import RecipesList from "./pages/Recipes/RecipesList";
import AddRecipe from "./pages/Recipes/AddRecipe";
import CaloriesEntries from "./pages/Calories/CaloriesEntries";
import CreateCaloriesEntry from "./pages/Calories/CreateCaloriesEntry";
import SignIn from "./routes/signin/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/weight-entries" element={<WeightEntriesList />} />
        <Route path="/add-weight" element={<CreateWeightEntry />} />
        <Route path="/weight" element={<GetWeightEntryByDate />} />
        <Route path="/calories" element={<CaloriesEntries />} />
        <Route path="/add-calories-entry" element={<CreateCaloriesEntry />} />
        <Route path="/login" element={<SignIn />} />
        {/* <Route path="/calories-date" element={<GetCaloriesEntryByDate />} /> */}
        <Route path="/recipes" element={<RecipesList />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Route>
    </Routes>
  );
};

export default App;
