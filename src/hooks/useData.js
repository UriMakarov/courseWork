import { useEffect, useState } from 'react';
import { fakerRU as faker } from '@faker-js/faker';

export function useData() {
  const [data, setData] = useState();
  useEffect(() => {
    const generateData = () => {
      const fakeData = [];
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
        fakeData.push(row);
      }
      return fakeData;
    };
    setData(generateData());
  }, []); 
  // console.log(data);
  return {data};
}