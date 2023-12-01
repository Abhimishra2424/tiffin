import React from 'react';
import ExpenseRow from './ExpenseRow';

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
  return (
    <div>
      <h2>Expense Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseRow key={expense.date} expense={expense} onDeleteExpense={onDeleteExpense} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
