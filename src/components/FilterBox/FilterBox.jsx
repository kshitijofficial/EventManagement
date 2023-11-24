import { useEffect, useState } from "react";
import "./FilterBox.css";

const FilterBox = ({ getDateYear }) => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(2023);

  const months = [
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
  const years = [2023, 2024];

  const updateParent = () => {
    getDateYear(selectedMonth, selectedYear);
  };
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value), 10);
  };
  const submitEventTimings = (e) => {
    e.preventDefault();
    updateParent();
  };
  useEffect(() => {
    updateParent();
  }, []);
  return (
    <div>
      <form className="filter-card" onSubmit={submitEventTimings}>
        <div className="wrapper">
          <div className="month">
            <label htmlFor="month">Month : </label>
            <select
              id="month"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              {months.map((month, index) => {
                return (
                  <option key={index} value={month}>
                    {month}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="month">
            <label htmlFor="year">Year : </label>
            <select id="year" value={selectedYear} onChange={handleYearChange}>
              {years.map((year, index) => {
                return (
                  <option key={index} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <button>Find Events</button>
      </form>
    </div>
  );
};

export default FilterBox;
