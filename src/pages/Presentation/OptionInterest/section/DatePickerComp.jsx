import { Button } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  const handleNextDate = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(nextDate);
  };

  const handlePreviousDate = () => {
    const previousDate = new Date(selectedDate);
    previousDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(previousDate);
  };

  return (
    <div className="App">
      <div className="date-picker-container">
        <Button
          startIcon={<ArrowLeftIcon onClick={handlePreviousDate} />}
          endIcon={<ArrowRightIcon onClick={handleNextDate} />}
        >
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            value={selectedDate}
            customInput={<input style={{ textAlign: "center", border: "none" }} />}
            dateFormat="dd/MM/yyyy"
          />
        </Button>
      </div>
    </div>
  );
};
export default DatePickerComp;
// const handleNextDate = () => {
//     const nextDate = new Date(selectedDate);
//     nextDate.setDate(selectedDate.getDate() + 1);
//     setSelectedDate(nextDate);
//   };

//   const handlePreviousDate = () => {
//     const previousDate = new Date(selectedDate);
//     previousDate.setDate(selectedDate.getDate() - 1);
//     setSelectedDate(previousDate);
//   };
