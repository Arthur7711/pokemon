import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Details</div>;
};
