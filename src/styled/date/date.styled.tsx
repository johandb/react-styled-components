import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import { Stack } from "../stack/stack.styled";
import { Text } from "../text/styled.text";

const StyledDate = styled.div`
  margin: 5px 0px 5px 0px;
  padding: 10px;
  width: fit-content;
  background-color: white;
  border: 1px lightgray solid;
  border-radius: 5px;
`;

const StyledDateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
`;

const StyledDateWeek = styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
  display: flex;
  margin-left: 8px;
  background-color: white;
`;

const StyledDateWeekDay = styled.div`
  margin-right: 5px;
  width: 38px;
  text-align: center;
`;

const StyledDateWeekDayBody = styled.div`
  padding-top: 10px;
  color: #17a2b8;
  /* font-style: italic; */
  font-size: 21px;
  display: flex;
  margin-left: 8px;
`;

const StyledDateWeekDayHeader = styled.div`
  border-bottom: 1px lightgray solid;
`;

const StyledDateDay = styled.div<{ $isSelected: boolean; $isCurrent: boolean }>`
  font-size: 18px;
  width: 38px;
  margin-right: 5px;
  padding: 5px 0px 5px 0px;
  color: black;
  ${(props) =>
    props.$isSelected
      ? `background-color: ${theme.colors.primary}; color: white; border-radius: 5px;`
      : `background-color: transparent;`}
  text-align: center;
  ${(props) => (props.$isCurrent && !props.$isSelected ? `border: 1px red solid; border-radius: 5px;` : ``)}
  &:hover {
    background-color: ${theme.colors.lightgray};
    color: black;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const StyledSelectDate = styled.select`
  outline: none;
  width: 120px;
  margin: 10px 10px 10px 10px;
  border-radius: 5px;
  padding: 5px;
  border: 1px lightgray solid;
  font-size: 16px;
`;

const StyledInputDate = styled.input`
  border: 1px solid ${theme.colors.defaultBorderColor};
  outline: none;
  border-radius: 5px;
  padding: 5px;
  width: auto;
`;

interface DateTimeProps {
  value?: Date | null;
  format?: "dd-mm-yyyy" | "yyyy-mm-dd";
  label?: string;
  onChange: (date: Date) => void;
}

export const DatePicker = (props: DateTimeProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [dateValues, setDateValues] = useState<{ record: { day: number; month: number; year: number }[] }[]>([]);

  const months = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

  useEffect(() => {
    setSelectedDate(props.value ?? new Date());
  }, []);

  useEffect(() => {
    buildDate();
  }, [selectedDate]);

  const buildDate = () => {
    let values = [];
    var d = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    var m = d.getMonth();
    var y = d.getFullYear();
    var dow = d.getDay() == 0 ? 6 : d.getDay() - 1;
    var row = [];
    if (y % 4 == 0) {
      daysInMonth[1] = 29;
    }
    var prevYear = y;
    var prevMonth = m - 1;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear = prevYear - 1;
    }

    for (var k = 1; k <= dow; k++) {
      var r1 = {
        day: daysInMonth[prevMonth] - dow + k,
        month: prevMonth + 1,
        year: prevYear,
      };
      row.push(r1);
    }

    for (var day = 0; day < daysInMonth[m]; day++) {
      var r2 = {
        day: day + 1,
        month: m + 1,
        year: y,
      };
      if ((day + dow + 1) % 7 == 0) {
        row.push(r2);
        values.push({ record: row });
        row = [];
      } else {
        row.push(r2);
      }
    }

    var nextMonth = m + 1;
    var nextYear = y;
    if (m > 11) {
      nextYear = y + 1;
    }
    var last = row.length;
    for (var l = 0; l < 7 - last; l++) {
      var r3 = {
        day: l + 1,
        month: nextMonth + 1,
        year: nextYear,
      };
      row.push(r3);
    }

    //console.log("row length:", row.length);
    values.push({ record: row });
    setDateValues(values);
  };

  const isSelectedDate = (date: { day: number; month: number; year: number }) => {
    return (
      date.day === selectedDate.getDate() && date.month === selectedDate.getMonth() + 1 && date.year === selectedDate.getFullYear()
    );
  };

  const isCurrentDate = (date: { day: number; month: number; year: number }) => {
    return (
      date.day === currentDate.getDate() && date.month === currentDate.getMonth() + 1 && date.year === currentDate.getFullYear()
    );
  };

  const onDateChange = (field: string, value: number) => {
    //console.log(field, ', ', value);
    let newSelectedDate = new Date(selectedDate);
    if (field === "month") {
      newSelectedDate.setDate(1);
      newSelectedDate.setMonth(value);
    } else if (field === "year") {
      newSelectedDate.setFullYear(value);
    }
    setSelectedDate(newSelectedDate);
    console.log("selectedDate:", selectedDate);
    console.log("originalDate:", currentDate);
  };

  const formatDate = () => {
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");
    if (props.format == undefined || props.format == "dd-mm-yyyy") {
      return `${day}-${month}-${year}`;
    }
    return `${year}-${month}-${day}`;
  };

  const pickDate = (day: number) => {
    let newSelectedDate = new Date(selectedDate);
    newSelectedDate.setDate(day);
    setSelectedDate(newSelectedDate);
    setShowDatePicker(false);
    props.onChange(newSelectedDate);
  };
  //console.log("dateValues:", dateValues);

  return (
    <Stack>
      {props.label && <Text label={props.label} />}
      <StyledInputDate
        readOnly
        type="text"
        value={formatDate()}
        onFocus={() => setShowDatePicker(true)}
        // onBlur={() => setShowDatePicker(false)}
        placeholder="Kies een datum"
      />
      {showDatePicker && (
        <StyledDate>
          <StyledDateHeader>
            <StyledSelectDate value={selectedDate.getMonth()} onChange={(e) => onDateChange("month", parseInt(e.target.value))}>
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </StyledSelectDate>
            <StyledSelectDate value={selectedDate.getFullYear()} onChange={(e) => onDateChange("year", parseInt(e.target.value))}>
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i} value={i + currentDate.getFullYear() - 5}>
                  {i + currentDate.getFullYear() - 5}
                </option>
              ))}
            </StyledSelectDate>
          </StyledDateHeader>
          <StyledDateWeekDayHeader>
            <StyledDateWeekDayBody>
              {days.map((day, index) => (
                <StyledDateWeekDay key={index}>{day}</StyledDateWeekDay>
              ))}
            </StyledDateWeekDayBody>
          </StyledDateWeekDayHeader>
          <div>
            {dateValues.map((row, i) => (
              <StyledDateWeek key={i}>
                {row.record.map((col, x) => (
                  <StyledDateDay
                    key={x}
                    $isSelected={isSelectedDate(col)}
                    $isCurrent={isCurrentDate(col)}
                    onClick={() => pickDate(col.day)}
                  >
                    {col.day}
                  </StyledDateDay>
                ))}
              </StyledDateWeek>
            ))}
          </div>
        </StyledDate>
      )}
    </Stack>
  );
};
