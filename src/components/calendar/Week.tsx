import React from "react";

const CalculateWeek: React.FC = () => {
  const week = ["Sun", "Mon", "Tue", "Wen", "Tur", "Fri", "Sat"];
  return (
    <div className="grid grid-cols-7">
      {week.map((v, i) => (
        <p
          key={i}
          className={`text-center ${v === "Sun" && "text-red-500"} ${
            v === "Sat" && "text-blue-500"
          }`}
        >
          {v}
        </p>
      ))}
    </div>
  );
};

const Week = React.memo(CalculateWeek);
export default Week;
