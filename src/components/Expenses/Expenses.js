import React, {useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');


  const filterChangeHanler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return (expense.date.getFullYear().toString() === filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter 
      seleted={filteredYear} 
      onChangeFilter={filterChangeHanler} 
      />      
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
