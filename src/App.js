import StarRating from "./components/StarRating";

function App() {
const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  return (
    <>
      <StarRating ratingLabels={ratingLabels}/>
    </>
  );
}

export default App;
