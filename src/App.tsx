import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreadList from "./components/Threads/ThreadList";
import ThreadNew from "./components/Threads/ThreadNew";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/threads/new" element={<ThreadNew />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;