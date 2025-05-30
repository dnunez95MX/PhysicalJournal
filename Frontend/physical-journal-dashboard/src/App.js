import { Route, Routes } from "react-router-dom";
import "./App.css";
import "@ant-design/v5-patch-for-react-19";
import Dashboard from "./components/dashboard/Dashboard";
import EntriesList from "./components/entries/EntriesList";
import CreateEntry from "./components/entries/CreateEntry";
import GetEntryById from "./components/entries/GetEntryById";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/entries" element={<EntriesList />} />
      <Route path="/add-entry" element={<CreateEntry />} />
      <Route path="/entry" element={<GetEntryById />} />
    </Routes>
  );
};

export default App;
