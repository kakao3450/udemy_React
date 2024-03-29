import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  
    const [enteredTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
  
  
  const titleChangeHandler = (event)=> {
    setEnterTitle(event.target.value);
    console.log(event)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  //   setUserInput((prevState)=>{
  //     return {...prevState, enteredTitle : event.target.value };
  //   }); 
   };
  
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier ==='title'){
  //     setEnterTitle(value);
  //   } else if (identifier ==='date'){
  //     setEnterDate(value);
  //   }else{
  //     setEnterAmount(value);
  //   }
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title : enteredTitle,
      amount : enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  };

  return (
  <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value ={enteredTitle} onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type = "number" min = "0.01" step = "0.01" value ={enterAmount} onChange={amountChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type = "date" min = "2019-01-01" step = "2022-12-31" value ={enterDate} onChange={dateChangeHandler}/>
      </div>
     <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
     </div> 
    </div>
  </form>
  )
};

export default ExpenseForm;