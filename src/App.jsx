import React from 'react';
import './App.css';

const expenseList = [
  { id: 1, amount: 4000, description: 'Breakfast at cafe' },
  { id: 2, amount: 2300, description: 'Fitness bill' },
  { id: 3, amount: 1800, description: 'Electricity bill' },
  { id: 4, amount: 12000, description: 'Flight to Bangkok' },
  { id: 5, amount: 2700, description: 'Lunch with friends' },
  { id: 6, amount: 1500, description: 'Movie tickets' },
  { id: 7, amount: 800, description: 'Taxi fare' }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
      <div className="expense-form">
        <input
          type="number"
          placeholder="Amount"
        />
        <input
          type="text"
          placeholder="Description"
        />
        <button>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expenses</h2>
        <ul>
          {expenseList.map((expense) => (
            <div key={expense.id} className="expense-item">
              <div className="expense-details">
                <div className="expense-description">{expense.description}</div>
              </div>
              <div className="expense-amount">${expense.amount}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
