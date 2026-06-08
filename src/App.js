import { useState } from "react";
import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

  function openDialog() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }

  return (
    <main className="app">
      <StarRating
        ratingLabels={ratingLabels}
        isDialogOpen={isDialogOpen}
      />
      <Dialog
        isDialogOpen={isDialogOpen}
        onOpen={openDialog}
        onClose={closeDialog}
      />
    </main>
  );
}

export default App;
