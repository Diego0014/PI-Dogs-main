import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../../store/actions";
import Dog from "../dog/dog";
import Pagination from "../pagination/pagination";

export default function Dogs() {
  let dogs = useSelector((state) => state.filteredDogs);
  let dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [perPage] = useState(8);

  const maxPage = Math.ceil(dogs.length / perPage);
  useEffect(() => {
    dispatch(fetchDogs());
  },
  // eslint-disable-next-line 
  []);


  return (
    <div>
      {dogs
      .slice((page-1)*perPage, (page-1)*perPage+perPage)
      .map((eachDog) => {
        return (
          <Dog
            key={eachDog.id}
            id={eachDog.id}
            name={eachDog.name}
            image={eachDog.image}
            weight={eachDog.weight}
            temperament={eachDog.temperament}
            bred_for={eachDog.bred_for}
            breed_group={eachDog.breed_group}
            life_span={eachDog.life_span}
            origin={eachDog.origin}
          />
        );
      })}
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </div>
  );
}
