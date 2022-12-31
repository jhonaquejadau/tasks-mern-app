import { Posts } from "./pages/Posts";
import { PostForm } from "./pages/PostForm";
import {NotFoundPage} from "./pages/NotFoundPage"
import {Routes, Route} from "react-router-dom"

import { Toaster } from "react-hot-toast";

import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#182848] to-[#182848]">
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/post-form" element={<PostForm/>}/>
        <Route path="/posts/:id" element={<PostForm/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
