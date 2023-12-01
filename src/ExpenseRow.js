import React from 'react';

const ExpenseRow = ({ expense, onDeleteExpense }) => {
  return (
    <tr>
      <td>{expense.date}</td>
      <td>{expense.amount}</td>
      <td>
        <button onClick={() => onDeleteExpense(expense)}>Delete</button>
      </td>
    </tr>
  );
};

export default ExpenseRow;
