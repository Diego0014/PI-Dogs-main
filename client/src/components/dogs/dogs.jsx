import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../../store/actions";
import Dog from "../dog/dog";
import Nav from "../navBar/navBar";

export default function Dogs() {
  let dogs = useSelector((state) => state.filteredDogs);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  return (
    <div>
      {dogs.map((eachDog) => {
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
    </div>
  );
}
