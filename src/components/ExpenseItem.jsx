import "./ExpenseItem.css";

export default function ExpenseItem({ description, amount }) {
    return (
        <ul>
            <div className="expense-item">
                <div className="expense-details">
                    <div className="expense-description">{description}</div>
                </div>
                <div className="expense-amount">${amount}</div>
            </div>
        </ul>
    )
};