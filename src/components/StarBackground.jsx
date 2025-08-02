import React, { useEffect, useState } from "react";

const NUM_SHOOTING_STARS = 20;
const NUM_STATIC_STARS = 100;

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];

    // Shooting stars
    for (let i = 0; i < NUM_SHOOTING_STARS; i++) {
      newStars.push({
        id: `shooting-${i}`,
        type: "shooting",
        top: Math.random() * window.innerHeight, 
        left: Math.random() * window.innerWidth,
        delay: Math.random() * 10000,
      });
    }

    // Static twinkling stars
    for (let i = 0; i < NUM_STATIC_STARS; i++) {
      newStars.push({
        id: `static-${i}`,
        type: "static",
        top: Math.random() * (window.innerHeight + 100) - 100,
        left: Math.random() * (window.innerWidth + 100) - 100,
      });
    }

    setStars(newStars);
  }, []);

  return (
    <div className="night">
      {stars.map((star) => (
        <div
          key={star.id}
          className={star.type == "shooting" ? "shooting_star" : "star"}
          style={{
            top: `${star.top}px`,
            left: `${star.left}px`,
            animationDelay: star.delay ? `${star.delay}ms` : undefined,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
