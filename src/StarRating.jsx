import { useState } from "react";

/* eslint-disable react/prop-types */
const StarRating = ({ starCount = 10 }) => {
  const [starValue, setStarValue] = useState();
  const [hoverValue, setHovervalue]=useState();

  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <h1 className="text-2xl font-bold absolute top-6">Star rating</h1>
      <div className="flex justify-center items-center text-3xl">
        {new Array(starCount).fill(0).map((a, ind) => {
          return (
            <span
              className={ind < starValue || ind<hoverValue ? "text-yellow-400" : ""}
              key={ind}
              onClick={() => setStarValue(ind + 1)}
              onMouseEnter={()=>setHovervalue(ind+1)}
              onMouseLeave={()=>setHovervalue(0)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
