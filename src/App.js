import React, { useState, useEffect } from 'react';
import AddExpenseForm from './AddExpenseForm';
import ExpenseTable from './ExpenseTable';
import './App.css';


const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Load data from local storage on component mount
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  const updateLocalStorage = (newExpenses) => {
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  const handleAddExpense = (newExpense) => {
    const newExpenses = [...expenses, newExpense];
    setExpenses(newExpenses);
    updateLocalStorage(newExpenses);
  };

  const handleDeleteExpense = (expenseToDelete) => {
    const updatedExpenses = expenses.filter((expense) => expense !== expenseToDelete);
    setExpenses(updatedExpenses);
    updateLocalStorage(updatedExpenses);
  };

  return (
    <div className="container">
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
};

export default App;
