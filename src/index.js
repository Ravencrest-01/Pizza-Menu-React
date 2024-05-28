import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style={color: 'red', fontSize: '48px', textTransform: 'uppercase' };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>React Pizza Company</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Autentic Italian cuisine. 6 creative dishes to choose fro. All from our stone oven, all organic, all delicious.</p>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Mushroom, mozarella, cheese, olive"
        photoName="pizzas/funghi.jpg"
        price="20"
      /> */}
    </main>
  );
}

function Pizza({pizzaObj}) {
  console.log(pizzaObj);

 

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>



        <span>{pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price * 10}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours().toString().padStart(2, "0");
  const isOpen = 10;
  const isClose = 22;
  // const min = new Date().getMinutes().toString().padStart(2, "0");
  // const hourMin = `${hour}:${min}`;
  // let message;
  // if (hour >= isOpen && hour < isClose) {
  //   message = (
  //     <p>
  //       We're open and taking orders, come visit us or order online. The shop is
  //       open until {isClose}:00.
  //     </p>
  //   );
  //   console.log("open");
  // } else {
  //   message = (
  //     <p>
  //       We're currently closed and not taking any online orders too. We'll open
  //       again at {isOpen}:00
  //     </p>
  //   );
  //   console.log("closed");
  // }
  // return (
  //   <footer className="footer">
  //       <div className="order">
  //         {hourMin}
  //         {message}
  //         <button className="btn">Order</button>
  //       </div>
  //   </footer>
  // );
  let messageOpen = (
    <p>
      We're open and taking orders, come visit us or order online. The shop is
      open until {isClose}:00.
    </p>
  );
  let messageClose = (
    <p>
      We're currently closed and not taking any online orders too. We'll open
      again at {isOpen}:00
    </p>
  );
  return (
    <footer className="footer">
      {hour > 10 && hour < 22 ? (
        <div className="order">{messageOpen}
        <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">{messageClose}</div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
