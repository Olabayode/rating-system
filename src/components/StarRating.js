import { useState } from "react";
import Star from "./Star";

function StarRating(props) {
  const [rating, setRating] = useState(0);

  return (
    <section className="star-rating">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            selected={star <= rating}
            disabled={props.isDialogOpen}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
      <h2>{props.ratingLabels[rating]}</h2>
    </section>
  );
}

export default StarRating;
