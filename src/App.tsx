import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreadList from "./components/Threads/ThreadList";
import ThreadNew from "./components/Threads/ThreadNew";
import PostList from "./components/Posts/PostList";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/threads/new" element={<ThreadNew />} />
        <Route path="/threads/:threadId" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;