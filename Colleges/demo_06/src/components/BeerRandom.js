import { AlertDanger } from "./Alert";
import useFetch from "../hooks/useFetch";

const BEER_API_RANDOMBEER = "https://random-data-api.com/api/beer/random_beer";

const BeerRandom = () => {
  // const [beer, setBeer] = useState(null);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  //
  // useEffect(() => {
  //   if (beer === null) {
  //     fetch(BEER_API_RANDOMBEER)
  //       .then((response) => {
  //         if (!response.ok) throw new Error(response.statusText);
  //         return response.json();
  //       })
  //       .then((data) => setBeer(data))
  //       .catch((error) => setError(error))
  //       .finally(() => {
  //         console.log("finally");
  //         setIsLoading(false);
  //       });
  //   }
  // }, []);
  //
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(BEER_API_RANDOMBEER);
  //     if (!response.ok) throw new Error(response.statusText);
  //     const data = await response.json();
  //     setBeer(data);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const [beer, error, isLoading] = useFetch(BEER_API_RANDOMBEER);

  return (
    <>
      {isLoading && (
        <img
          src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
          alt="Loading"
          style={{ width: "3rem", height: "3rem" }}
        />
      )}
      {error && <AlertDanger title="Error" message={error.message} />}
      {beer && (
        <div className="beer" data-uid={beer.uid}>
          <h2>{beer.name}</h2>
          <h3>{beer.brand}</h3>
          <p>{beer.hop}</p>
          <p>{beer.alcohol}</p>
        </div>
      )}
    </>
  );
};

export default BeerRandom;
