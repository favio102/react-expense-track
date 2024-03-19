import { useDispatch, useSelector } from "react-redux";
import s from "./styles.module.css";
import { setIncomeAction } from "store/expense/expense-slice";

export function IncomeInput(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const dispach = useDispatch();
  function setIncome(e) {
    dispach(setIncomeAction(Number.parseFloat(e.target.value)));
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={income}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
          onChange={setIncome}
        />
      </div>
    </div>
  );
}
