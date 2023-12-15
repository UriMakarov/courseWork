import { useData } from "../hooks/useData";

const LoanList = () => {
  const {data} = useData(); 
  return (
    <>
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
            <th>Статус</th>
            <th>IP-адрес</th>
            <th>Порт</th>
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
              <td>{row.status}</td>
              <td>{row.ip}</td>
              <td>{row.port}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LoanList;