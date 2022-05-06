import { useDispatch } from "react-redux";
import { ASCEND, DESCEND } from "../../constants/order";
import { sort } from "../../store/actions";

export default function Order() {
    const dispatch = useDispatch();
    function onSelectChange(e){
        dispatch(sort(e.target.value));
    }
  return (
    <div>
      <select name="select" onChange={onSelectChange}>
        <option value={ASCEND}>(A-Z) Ascending</option>
        <option value={DESCEND}>(Z-A) Descending</option>    
      </select>
    </div>
  );
}
