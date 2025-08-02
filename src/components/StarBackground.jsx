import React, { useEffect, useState } from "react";

const NUM_STARS = 30;

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {

    const newStars = [];
    for (let i = 0; i < NUM_STARS; i++) {
      newStars.push({
        id: i,
        top: Math.random() * (window.innerHeight+10) -500,
        left: Math.random() * (window.innerWidth+10) -500,
        delay: Math.random() * 10000,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="night">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting_star"
          style={{
            top: `${star.top}px`,
            left: `${star.left}px`,
            animationDelay: `${star.delay}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
