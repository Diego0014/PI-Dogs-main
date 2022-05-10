import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/landing/initialPage";

import DogDetail from "./components/getDogDetail/dogDetail";
import Home from "./components/index";
import CreateDog from "./components/createNewDog/createDog";
import { getTemperaments } from "./store/actions";

function App() {
  console.log(getTemperaments());
  return (
    <div className="App">
      <Routes>
      <Route path='/' element = {<Index/>} />
      <Route path='/home/:id' element = {<DogDetail/>} />
      <Route path='/home' element = {<Home/>} />
      <Route path='/dog' element = {<CreateDog/>} />
      </Routes>
    </div>
  );
}

export default App;
