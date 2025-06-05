import { Route, Routes } from "react-router-dom";
import "./App.css";
import "@ant-design/v5-patch-for-react-19";
import Dashboard from "./components/dashboard/Dashboard";
import EntriesList from "./pages/Weight/EntriesList";
import CreateWeightEntry from "./pages/Weight/CreateWeightEntry";
import GetWeightEntryByDate from "./pages/Weight/GetWeightEntryByDate";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/weight-entries" element={<EntriesList />} />
      <Route path="/add-weight" element={<CreateWeightEntry />} />
      <Route path="/weight" element={<GetWeightEntryByDate />} />
    </Routes>
  );
};

export default App;
