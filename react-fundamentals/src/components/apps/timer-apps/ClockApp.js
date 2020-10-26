import React, { useState, useEffect } from "react";

const getTimeString = () => {
  const date = new Date(Date.now()).toLocaleTimeString("en-US", {
    timeZone: "America/Chicago",
  });
  return date;
};

const ClockApp = () => {
  const [time, setTime] = useState(getTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      let date = getTimeString();
      setTime(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="section-title">React Clock</h1>
      <p>
        This is the time in Chicago {time} and this is the time in Indianapolis
        {new Date(Date.now()).toLocaleTimeString("en-US", {
          timeZone: "America/Indianapolis",
        })}
      </p>
    </div>
  );
};

export default ClockApp;
