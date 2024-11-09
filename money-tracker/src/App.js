import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
          <input type="text" placeHolder={'+5 more reeses'}/>
          <input type="datetime-local"/>          
        </div>
        <div className="description">
          <input type="text" placeHolder={'description'}/>
        </div>
        <button type="submit">Add new transaction</button>
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New Reeses Bag</div>
              <div className="description">it was time to feed my sugar levels</div>
            </div>
            <div className="right">
              <div className="price green">$5.00</div>
              <div className="datetime">2024-11-9 2:11</div>
            </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">New Reeses Bag</div>
              <div className="description">it was time to feed my sugar levels</div>
            </div>
            <div className="right">
              <div className="price red">-$5.00</div>
              <div className="datetime">2024-11-9 2:11</div>
            </div>
          </div>
          <div className="transaction">
            <div className="left">
              <div className="name">New Website</div>
              <div className="description">it was time to feed my sugar levels</div>
            </div>
            <div className="right">
              <div className="price green">+$5.00</div>
              <div className="datetime">2024-11-9 2:11</div>
            </div>
          </div>
        </div>
      </form>

    </main>
  );
}

export default App;
