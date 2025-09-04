import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookingContext = createContext();

export const BookingsProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });
  

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

const addBooking = (newBooking) => {
  const bookingWithId = { ...newBooking, id: uuidv4() };
  setBookings((prev) => [...prev, bookingWithId]);
  
};



const cancelBooking = (id) => {
  setBookings((prev) => {
    const updated = prev.filter((b) => b.id !== id);
    return updated;
  });
};



  return (
    <BookingContext.Provider
      value={{ bookings, setBookings, addBooking, cancelBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};
