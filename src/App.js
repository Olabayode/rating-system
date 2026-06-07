import { useState } from "react";
import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  function toggleDialog() {
    setIsDialogOpen(!isDialogOpen);
  }

  return (
    <main className="app">
      <StarRating
        ratingLabels={ratingLabels}
        isDialogOpen={isDialogOpen}
      />
      <Dialog isDialogOpen={isDialogOpen} onClick={toggleDialog} />
    </main>
  );
}

export default App;
