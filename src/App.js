import { useState } from "react";
import "./App.css";
import Shop from "./components/shop/shop.component";
import SHOP_DATA from "./components/shop/shop.data";

function App() {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div className="App">
      <Shop shopData={shopData} />
    </div>
  );
}

export default App;
