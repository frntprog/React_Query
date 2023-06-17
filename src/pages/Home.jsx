import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const {
    data: kittyData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["kitty"], () => {
    return Axios.get("https://excuser-three.vercel.app/v1/excuse/").then(
      (res) => {
        console.log(res);
        return res.data[0];
      }
    );
  });

  if (isError) {
    return <h1>Sorry, there was an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>
        This is a Homepage,<p>{kittyData?.excuse}</p>{" "}
      </h1>
      <button onClick={refetch}>Update data</button>
    </>
  );
};

export default Home;
