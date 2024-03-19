import { ExpenseList } from "container/ExpenseList/ExpenseList";
import { ExpenseInput } from "./container/ExpenseInput/ExpenseInput";
import s from "./styles.module.css";
import { IncomeInput } from "./container/IncomeInput/IncomeInput";
import { ExpenseTotal } from "./container/ExpenseTotal/ExpenseTotal";
import { Logo } from "components/Logo/Logo";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

export function App() {
  const percentage = 6;

  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>
          <Logo title="Spent" subtitle="Track your expenses"/>
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <ExpenseList />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal/>
          </div>
        </div>
      </div>
      {/* <div style={{ width: 200, height: 200}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div> */}
    </div>
  );
}
