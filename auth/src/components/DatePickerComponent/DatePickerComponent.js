import React from "react";
import { Button } from "react-native";
import DatePicker from "react-native-date-picker";

const DatePickerComponent = ({ date, setDate}) => {
  
  return (
      <DatePicker
        modal
        date={date}
        onConfirm={(date) => {
          setDate(date);
        }}
      />
  );
};

export default DatePickerComponent