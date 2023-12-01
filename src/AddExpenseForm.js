import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddExpenseForm = ({ onAddExpense }) => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    const newExpense = {
      date: date.toLocaleDateString(),
      amount: parseFloat(amount),
    };
    onAddExpense(newExpense);
    setDate(new Date());
    setAmount('');
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <div>
        <label>Date:</label>
        <DatePicker selected={date} onChange={(newDate) => setDate(newDate)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpenseForm;
