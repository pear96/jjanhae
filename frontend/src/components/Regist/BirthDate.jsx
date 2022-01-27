import React from "react";
import { getYear, getMonth } from "date-fns"; // getYear, getMonth
import DatePicker, { registerLocale } from "react-datepicker"; // 한국어적용
import ko from "date-fns/locale/ko"; // 한국어적용
import styles from "./Register.module.css";

registerLocale("ko", ko); // 한국어적용
const _ = require("lodash");

const BirthDate = ({ date, onChange }) => {
  // const [startDate, setStartDate] = useState(new Date());
  const years = _.range(1900, getYear(new Date()) + 1, 1); // 수정
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <DatePicker
      // showYearPicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
        // style={{
        //   margin: 10,
        //   display: "flex",
        //   justifyContent: "center",
        // }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option className={styles.selectYear} key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={date}
      dateFormat={"yyyy-MM-dd"}
      locale={ko}
      onChange={(date) => onChange(date)}
      placeholderText="생년월일"
      className={styles.inputData}
    />
  );
};
export default BirthDate;
