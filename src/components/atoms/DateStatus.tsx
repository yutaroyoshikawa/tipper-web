import React, { FC, useMemo } from "react";
import dayjs from "dayjs";

type Props = {
  date: Date;
  end?: Date;
};

const DateStatus: FC<Props> = ({ date, end }) => {
  const start = useMemo(() => dayjs(date).format("YYYY/MM/DD HH:mm"), [date]);
  const finish = useMemo(() => {
    if (typeof end === "undefined") {
      return undefined;
    }

    if (dayjs(end).format("YYYY/MM/DD") === dayjs(date).format("YYYY/MM/DD")) {
      return dayjs(end).format("HH:mm");
    }

    return dayjs(end).format("YYYY/MM/DD HH:mm");
  }, [date, end]);

  return (
    <div>
      {start}
      {finish && <> - {finish}</>}
    </div>
  );
};

export default DateStatus;
