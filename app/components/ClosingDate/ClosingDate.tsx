"use client";

import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "../Calendar/Calendar.css";
import { formatISO, isToday } from "date-fns";

type Props = {
  closedDays: { id: string; date: Date }[];
  city: string;
};

const ClosingDate = ({ closedDays, city }: Props) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDateClick = (date: Date) => {
    // Check if the date is already selected
    const isDateSelected = selectedDates.some(
      (d) => d.toLocaleDateString() === date.toLocaleDateString()
    );

    if (!isDateSelected) {
      // Update the selectedDates array with the new date
      setSelectedDates([...selectedDates, date]);
    } else {
      // Deselect the date if it's already selected
      const updatedDates = selectedDates.filter(
        (d) => d.toLocaleDateString() !== date.toLocaleDateString()
      );
      setSelectedDates(updatedDates);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/days/closed/${city}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedDates, cityName: city }),
      });

      if (response.ok) {
        console.log("Dates submitted successfully!");
        setSelectedDates([]);
      } else {
        console.error("Failed to submit dates");
      }
    } catch (error) {
      console.error("Error submitting dates:", error);
    }
    location.reload();
  };

  return (
    <div className="p-4 mx-auto dark:text-gray-800">
      <div className="text-lg md:text-3xl text-primary font-semibold mb-2 dark:text-gray-200">
        Closing Dates
      </div>
      <ReactCalendar
        minDate={new Date()}
        className="REACT-CALENDAR p-2 mx-auto"
        view="month"
        onClickDay={handleDateClick}
        tileDisabled={({ date, view }) =>
          (view === "month" &&
            closedDays.some(
              (closedDay) =>
                date.getFullYear() === closedDay.date.getFullYear() &&
                date.getMonth() === closedDay.date.getMonth() &&
                date.getDate() === closedDay.date.getDate()
            )) ||
          isToday(date)
        }
      />

      {/* Display selected dates */}
      <div className="mt-4 ">
        <h2 className="text-lg md:text-3xl font-semibold mb-2 dark:text-gray-200">
          Selected Dates:
        </h2>
        <ul className="list-disc pl-4">
          {selectedDates.map((date) => (
            <li
              key={date.toLocaleDateString()}
              className="text-gray-800 dark:text-gray-200"
            >
              {date.toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition"
      >
        Submit
      </button>
    </div>
  );
};

export default ClosingDate;
