import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../store/actions";


export default function SearchBar() {
  const [search, setSearch] = useState('');
  let dispatch = useDispatch()
  function onSubmit(e){
      e.preventDefault();
      dispatch(getDogByName(search))
    }
    function onInputChange(e){
      e.preventDefault();
      setSearch(e.target.value);
    }
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={search} />
        <input type="submit" value="Search" />
      </form>
    </div>
      )
}
