import React from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface HeaderProps {
  selectedYear: number;
  selectedMonth: number;
  prevMonth: () => void;
  nextMonth: () => void;
}

const Header: React.FC<HeaderProps> = ({
  selectedYear,
  selectedMonth,
  prevMonth,
  nextMonth,
}) => {
  return (
    <div className="flex justify-around">
      <button onClick={prevMonth}>&#10094;</button>
      <div className="text-center">
        {monthNames[selectedMonth - 1]} {selectedYear}
      </div>
      <button onClick={nextMonth}>&#10095;</button>
    </div>
  );
};

export default Header;
