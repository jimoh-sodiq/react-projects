import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  starCount?: number;
}

export default function StarRating({ starCount = 5 }: Props) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  function handleStarClick(rating: number) {
    setRating(rating);
  }

  function handleMouseEnter(rating: number) {
    setHoverRating(rating);
  }

  function handleMouseLeave(rating: number) {
    setHoverRating(0);
  }

  return (
    <section className='space-y-4'>
      <p className="font-semibold text-lg  text-center">
        Give {hoverRating} {hoverRating > (0 || 1) ? "stars" : "star"}
      </p>
      <div className="flex items-center gap-5 justify-center">
        {[...Array(starCount)].map((star, index) => {
          const indexRate = index + 1;
          return (
            <FaStar
              className={
                indexRate > (hoverRating || rating)
                  ? "text-gray-600 cursor-pointer"
                  : "text-yellow-500 cursor-pointer"
              }
              size={26}
              key={index}
              onClick={() => handleStarClick(indexRate)}
              onMouseEnter={() => handleMouseEnter(indexRate)}
              onMouseLeave={() => handleMouseLeave(indexRate)}
            />
          );
        })}
      </div>
      <p className="font-semibold text-lg  text-center">
        {rating} {rating > (0 || 1) ? "stars" : "star"} selected
      </p>
    </section>
  );
}
