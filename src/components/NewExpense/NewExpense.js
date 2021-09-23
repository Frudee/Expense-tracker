import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
  const [showBtn, setShowBtn] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowBtn(true);
  };

  const changeShowBtnHandler = () => {
    setShowBtn(false);
  };

  const stopShowBtn = (enteredState) => {
    setShowBtn(enteredState);
  };

  if (showBtn) {
    return (
      <div className="new-expense">
        <button onClick={changeShowBtnHandler}>Add expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onStopShowBtn={stopShowBtn}
      />
    </div>
  );
};

export default NewExpense;
