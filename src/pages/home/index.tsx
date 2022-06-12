import { useState, useEffect } from "react";

export const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async function () {
      const fetchingData = await fetch(
        `https://pokeapi.co/api/v2/pokemon`
      );
      const data = await fetchingData.json();
       setList(data);
    })();
  }, []);
  console.log(list);
  return <div>Home</div>;
};
