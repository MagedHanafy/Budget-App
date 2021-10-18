import React from "react";

const Header = () => {
  const displayDate = () => {
    let now = new Date();

    let months = [
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
    let month = now.getMonth();

    let year = now.getFullYear();

    return `${months[month]} ${year}`;
  };
  return (
    <header>
      <h3>Available Budget in {displayDate()}</h3>
    </header>
  );
};

export default Header;
