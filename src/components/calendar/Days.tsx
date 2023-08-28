import React from "react";

interface DayProps {
  today: { year: number; month: number; day: number };
  selectedYear: number;
  selectedMonth: number;
  prevMonth: () => void;
  nextMonth: () => void;
}

const Days: React.FC<DayProps> = ({
  today,
  selectedYear,
  selectedMonth,
  prevMonth,
  nextMonth,
}) => {
  const [selectedDay, setSelectedDay] = React.useState<{
    year: number;
    month: number;
    day: number;
  }>({ year: 0, month: 0, day: 0 });

  const showDay = React.useMemo(() => {
    const lastMonthDate = new Date(selectedYear, selectedMonth - 1, 0);
    const MonthDate = new Date(selectedYear, selectedMonth, 0);
    const prevDate = lastMonthDate.getDate();
    const prevDay = lastMonthDate.getDay();
    const currentDate = MonthDate.getDate();
    return { prevDate, prevDay, currentDate };
  }, [selectedMonth, selectedYear]);

  const getDayBorderColor = (day: number) => {
    return getSelectedDayBorderColor(day) || getCurrentDayBorderColor(day);
  };

  const getSelectedDayBorderColor = (day: number) => {
    if (
      selectedDay.year === selectedYear &&
      selectedDay.month === selectedMonth &&
      selectedDay.day === day
    )
      return "border-red-500";
  };

  const getCurrentDayBorderColor = (day: number) => {
    if (
      today.year === selectedYear &&
      today.month === selectedMonth &&
      today.day === day
    )
      return "border-blue-500";
  };

  const returnDays = () => {
    const previousMonthDays = returnPreviousMonthDays();
    const currentMonthDays = returnCurrentMonthDays();
    const nextMonthDays = returnNextMonthDays(
      previousMonthDays.length + currentMonthDays.length,
    );

    return [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  const returnPreviousMonthDays = () => {
    const days = [];
    for (
      let p = showDay.prevDay === 6 ? 32 : showDay.prevDate - showDay.prevDay;
      p <= showDay.prevDate;
      p++
    ) {
      days.push(
        <div
          key={`prev_${p}`}
          onClick={prevMonth}
          className="h-[45px] flex items-center justify-center"
        >
          <p className="flex items-center justify-center text-gray-400">{p}</p>
        </div>,
      );
    }
    return days;
  };

  const returnCurrentMonthDays = () => {
    const days = [];
    for (let i = 1; i <= showDay.currentDate; i++) {
      days.push(
        <div
          key={i}
          onClick={() =>
            setSelectedDay({ year: selectedYear, month: selectedMonth, day: i })
          }
          className={`h-[45px] flex items-center justify-center ${getDayBorderColor(
            i,
          )}`}
        >
          <p
            className={`w-[70%] h-[70%] flex items-center justify-center border rounded-full ${getDayBorderColor(
              i,
            )}`}
          >
            {i}
          </p>
        </div>,
      );
    }
    return days;
  };

  const returnNextMonthDays = (dayArrLength: number) => {
    const days = [];
    for (let n = 1; n <= 42 - dayArrLength; n++) {
      days.push(
        <div
          key={`next_${n}`}
          onClick={nextMonth}
          className="h-[45px] flex items-center justify-center"
        >
          <p className="w-full h-full flex items-center justify-center text-gray-400">
            {n}
          </p>
        </div>,
      );
    }
    return days;
  };

  return <div className="grid grid-cols-7">{returnDays()}</div>;
};

export default Days;
