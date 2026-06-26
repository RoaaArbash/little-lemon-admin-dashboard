import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [inventory] = useState([
    { id: 1, item: "Tomatoes", quantity: 10 },
    { id: 2, item: "Lettuce", quantity: 5 },
    { id: 3, item: "Meat", quantity: 0 },
  ]);

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("myOrders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prev) => [
        ...prev,
        { id: Date.now(), order: "New Meal #" + (prev.length + 1) },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("myOrders", JSON.stringify(orders));
  }, [orders]);

  // دالة الـ Reset تنتهي هنا
  const resetDashboard = () => {
    localStorage.clear();
    window.location.reload();
  };

  // الـ return يجب أن يكون خارج أي دالة (في مستوى الـ App مباشرة)
  return (
    <div className="dashboard" style={{ padding: "20px" }}>
      <h1>Little Lemon Admin Dashboard</h1>

      <section>
        <h2>Inventory Status:</h2>
        {inventory.map((item) => (
          <div key={item.id} style={{ color: item.quantity === 0 ? "red" : "green" }}>
            {item.item}: {item.quantity === 0 ? "Out of Stock! ⚠️" : item.quantity}
          </div>
        ))}
      </section>

      <section>
        <h2>Live Orders:</h2>
        <ul>
          {orders.map((o) => (
            <li key={o.id}>{o.order}</li>
          ))}
        </ul>
      </section>

      <button onClick={resetDashboard} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Reset Dashboard
      </button>
    </div>
  );
}

export default App;