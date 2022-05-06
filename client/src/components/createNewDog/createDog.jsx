import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
 
export function CreateDog() {
  const [dog, setDog] = useState({});
  const history = useHistory();
  function onInputChange(e) {
    e.preventDefault();
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/api/dogs", dog).then(() => {
      history.push("/");
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <label HTMLfor="">Name *</label>
      <input
        onChange={onInputChange}
        type="text"
        name="name"
        value={dog.name}
      />
      <label HTMLfor="">Image *</label>
      <input
        onChange={onInputChange}
        type="text"
        name="image"
        value={dog.image}
      />
      <label HTMLfor="">Name *</label>
      <input type="submit" name="" />
    </form>
  );
}
