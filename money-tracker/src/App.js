import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + '/transactions';
    const response = await fetch(url);
    return await response.json();

  }
 
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
            name:name.substring(price.length+1), 
            price, 
            description, 
            datetime})
    }).then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); 
    })
    .then(newTransaction => {
        if (newTransaction) {
            setName('');
            setDatetime('');
            setDescription('');

            setTransactions(prevTransactions => [...prevTransactions, newTransaction]);


            console.log('result', newTransaction);
        } else {
            console.log('Empty response body');
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
  }

  let balance = 0;
  for (const transaction of transactions) {
    balance += transaction.price;
  }

  balance = balance.toFixed(2);
  const fraction = balance.substring(balance.length-3);
  balance = balance.substring(0, balance.length-3);

  return (
    <main>
      <h1>${balance}<span>{fraction}</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" 
                 value={name}
                 onChange={ev => setName(ev.target.value)}
                 placeholder={'+5 more reeses'}/>
          <input type="datetime-local"
                 value={datetime}
                 onChange={ev => setDatetime(ev.target.value)}/>          
        </div>
        <div className="description">
          <input type="text" 
                 value={description}
                 onChange={ev => setDescription(ev.target.value)}
                 placeholder={'description'}/>
        </div>
        <button type="submit">Add new transaction</button>

        <div className="transactions">
          {transactions.length > 0 && transactions.map(transaction => (
            <div className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
                <div className={"price " + ((transaction.price < 0)? "red" : "green")}>
                  {transaction.price}</div>
                <div className="datetime">2024-11-9 2:11</div>
              </div>
            </div>
          ))}
          
        </div>
      </form>

    </main>
  );
}

export default App;
