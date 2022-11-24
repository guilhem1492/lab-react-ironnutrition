// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [allFood, setAllFood] = useState(foods);
  const [searchString, setSearchString] = useState('');
  const title = 'IronContacts';

  function removeFood(foodToRemove) {
    const remainingFood = allFood.filter((item) => item !== foodToRemove);

    setAllFood(remainingFood);
  }

  return (
    <div className="App">
      <h1>{title}</h1>

      <AddFoodForm setAllFood={setAllFood} />

      <Button> Hide Form / Add New Food </Button>

      <Search {...{ searchString, setSearchString }} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {allFood
          .filter((item) =>
            item.name.toLowerCase().includes(searchString.toLowerCase())
          )
          .map((item) => (
            <FoodBox
              key={item.name + item.calories}
              food={item}
              removeFood={removeFood}
            />
          ))}
      </Row>
    </div>
  );
}
export default App;
