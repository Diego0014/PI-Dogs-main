import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/landing/initialPage";
import Dogs from "./components/dogs/dogs"
import DogDetail from "./components/getDogDetail/dogDetail";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element = {<Index/>} />
      <Route path='/home/:id' element = {<DogDetail/>} />
      <Route path='/home' element = {<Dogs/>} />
      </Routes>
    </div>
  );
}

export default App;
