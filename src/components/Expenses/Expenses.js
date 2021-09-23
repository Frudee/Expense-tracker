import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("");

  const changeYearHandler = (enteredYear) => {
    setYear(enteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onChangeYearHandler={changeYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
