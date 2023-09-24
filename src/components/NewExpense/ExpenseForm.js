import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //two approaches of setting the states
  //1.
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //2.
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   title: event.target.value
    // });

    //also, sometimes react schedules updating of the state, and in some scenarios this above example would not work. Solution is
    // to provide function as a parameter of setter :

    // setUserInput((previousState) => {
    //   return { ...previousState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={title}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={date}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
