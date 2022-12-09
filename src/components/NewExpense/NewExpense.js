import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

function NewExpense(props) {
  const saveData = (inputData) => {
    const expenseData = {
      ...inputData,
      id: Math.random().toString(),
    };
    props.onAdd(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveData} />
    </div>
  );
}

export default NewExpense;
