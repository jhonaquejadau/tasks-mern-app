import { Posts } from "./pages/Posts";
import {Routes, Route} from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="bg-neutral-600 min-h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Posts/>}/>
      </Routes>
    </div>
  );
}

export default App;
