import { useData } from "../hooks/useData.js";

const LoanList = () => {
  const {data} = useData(10); 
  return (
    <div className="">
      <p>Title</p>
      <table>
        <thead>
          <tr>
            <th>Заемщик</th>
            <th>Вид кредита</th>
            <th>Дата</th>
            <th>Дата начала</th>
            <th>Дата завершения</th>
            <th>Номер</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td>{row.borrower}</td>
              <td>{row.type}</td>
              <td>{row.date}</td>
              <td>{row.start}</td>
              <td>{row.end}</td>
              <td>{row.number}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanList;