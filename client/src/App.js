import { Posts } from "./pages/Posts";
import { PostForm } from "./pages/PostForm";
import {Routes, Route} from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#182848] to-[#182848]">
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/post-form" element={<PostForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
