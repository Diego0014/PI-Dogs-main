import { useDispatch } from "react-redux";
import { ASCEND, DESCEND, WASCEND, WDESCEND } from "../../constants/order";
import { sort } from "../../store/actions";

export default function Order() {
  const dispatch = useDispatch();
  function onSelectChange(e) {
    dispatch(sort(e.target.value));
  }
  return (
    <div>
      <span>order by: </span> 
      <select name="select" onChange={onSelectChange}>
        <option value={ASCEND}>(Z-A) Descending</option>
        <option value={DESCEND}>(A-Z) Ascending</option>
        <option value={WASCEND}>(Weight -+) Ascending</option>
        <option value={WDESCEND}>(Weight +-) Descending</option>
      </select>
    </div>
  );
}
