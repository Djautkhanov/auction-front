import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AuctionAddTime = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("start_time", startDate.toISOString());
    formData.append("end_time", endDate.toISOString());
    console.log(startDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="start_time">Дата и время начала аукциона:</label>
        <br />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Время"
          dateFormat="dd.MM.yyyy HH:mm"
          id="start_time"
        />
      </div>
      <div>
        <label htmlFor="end_time">Дата и время окончания аукциона:</label>
        <br />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Время"
          dateFormat="dd.MM.yyyy HH:mm"
          id="end_time"
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default AuctionAddTime;

