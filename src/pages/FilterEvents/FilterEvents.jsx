import { useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../SearchEventList/SearchEventList";
import Navigation from "../../components/Navgation/Navgation";
import "./FilterEvents.css";
const FilterEvents = () => {
  const [monthYear, setMonthYear] = useState({
    selectedMonth: null,
    selectedYear: null,
  });

  const getDateYear = (selectedMonth, selectedYear) => {
    setMonthYear({ selectedMonth, selectedYear });
  };

  return (
    <>
      <Navigation />
      <div className="find-events-wrapper">
        <FilterBox getDateYear={getDateYear} />
        <SearchEventList monthYear={monthYear} />
      </div>
    </>
  );
};

export default FilterEvents;
