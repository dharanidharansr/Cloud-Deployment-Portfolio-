import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function getScheduleMessage(date) {
  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const timeNum = hour * 100 + minute;

  if (day >= 1 && day <= 5) {
    if (timeNum < 630) return "I'm probably sleeping.";
    if (timeNum >= 630 && timeNum < 830) return "I'm waking up and getting ready for college.";
    if (timeNum >= 830 && timeNum < 845) return "I'm travelling to college from hostel.";
    if (timeNum >= 845 && timeNum < 1225) return "I'm attending lectures.";
    if (timeNum >= 1225 && timeNum < 1325) return "I'm having lunch.";
    if (timeNum >= 1325 && timeNum < 1615) return "I'm attending lectures.";
    if (timeNum >= 1615 && timeNum < 1630) return "I'm travelling to hostel.";
    if (timeNum >= 1630 && timeNum < 1930) return "I'm chilling.";
    if (timeNum >= 1930 && timeNum < 2015) return "I'm having dinner.";
    if (timeNum >= 2015 && timeNum < 2030) return "I'm on a call with my parents.";
    if (timeNum >= 2030 && timeNum < 2230) return "I'm working on improving my skills.";
    if (timeNum >= 2230 && timeNum < 2400) return "I'm sleeping.";
    return "I'm probably sleeping.";
  }
  else{
      return "It's weekend or holiday.";
  }
}

export default function Clock() {
  const [time, setTime] = useState(() => {
    // Get IST time
    const now = new Date();
    return new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get IST time
      const now = new Date();
      setTime(new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => n.toString().padStart(2, "0");
  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  const message = getScheduleMessage(time);

  // Detect mobile device
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <TooltipProvider>
      <Tooltip
        open={isMobile ? open : undefined}
        onOpenChange={isMobile ? setOpen : undefined}
      >
        <TooltipTrigger asChild>
          <div
            className={`
              text-white font-mono bg-[#18181b]/80 rounded-sm shadow-lg border border-white/10 select-none cursor-pointer
              px-4 py-2 text-lg
              transition-all
              ${isMobile ? "text-base px-3 py-1.5 mt-2" : ""}
            `}
            onClick={isMobile ? () => setOpen((prev) => !prev) : undefined}
          >
            {hours}:{minutes}:{seconds}
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="end"
          className={isMobile ? "text-sm max-w-[180px]" : ""}
        >
          <span>This is my time. {message}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
