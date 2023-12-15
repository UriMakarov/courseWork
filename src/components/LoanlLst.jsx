import { useState, useEffect } from "react";
import { fakerRU as faker } from '@faker-js/faker';

const LoanList = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const generateData = () => {
      const data = [];
           for (let i = 0; i < 10; i++) {
        const row = {
          borrower: faker.person.fullName(),
          type: faker.helpers.arrayElement(['Равномерное погашение ОД', 'Аннуитетное погашение']),
          date: faker.date.recent().toLocaleDateString(), 
          start: faker.date.past().toLocaleDateString(), 
          end: faker.date.future().toLocaleDateString(), 
          number: faker.finance.accountNumber(), 
          amount: faker.finance.amount(), 
          status: faker.helpers.arrayElement(['Активно', 'Не активно']),
          ip: faker.internet.ip(), 
          port: faker.datatype.number({ min: 1000, max: 10000 }), 
        };
        // console.log(row);
        data.push(row);
      }
      return data;
    };
    setData(generateData());
  }, []); 
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
          {data.map((row, index) => (
            // рендерим каждую строку из данных
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