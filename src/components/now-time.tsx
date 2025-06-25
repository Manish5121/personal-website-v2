import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const NowTime: React.FC = () => {
  const [time, setTime] = useState(moment().tz("Asia/Kolkata"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz("Asia/Kolkata"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-body">Pune, {time.format("h:mm A")}</span>;
};


export default NowTime;