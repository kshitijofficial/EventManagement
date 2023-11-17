import { useState } from "react"
import FilterBox from "../components/FilterBox"
import SearchEventList from "./SearchEventList"
import Navigation from "../components/Navgation"
const FilterEvents=()=>{
  const [monthYear,setMonthYear]=useState({selectedMonth:null,selectedYear:null});

  const getDateYear=(selectedMonth,selectedYear)=>{
    setMonthYear({selectedMonth,selectedYear})
  }

  return (
    <>
     <Navigation/>
     <FilterBox getDateYear={getDateYear}/>
     <SearchEventList monthYear={monthYear}/>
    </>
  )
}

export default FilterEvents
