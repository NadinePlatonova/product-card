import React from 'react';
import './App.css';
import Card from '../Card/Card';

function App() {
  return (
    <div className="App">
      <Card 
        title="Fruits and vegetables are packed with essential vitamins, minerals, and nutrients that are essential for maintaining a healthy body and mind"
        description="Fruits and vegetables"
        price="$ 3.90"
        location="Newport Beach, CA, USA"
      />
      <Card 
        title="Extra fresh fruits and vegetables"
        description="Apples, bananas, berries, citrus fruits like oranges and lemons, tropical fruits like pineapple and mango, and stone fruits like peaches and plums"
        price="$ 3.90"
        location="Newport Beach, CA, USA"
      />
      <Card 
        title="Extra fresh fruits and vegetables"
        description="Apples, bananas, berries, citrus fruits like oranges and lemons, tropical fruits like pineapple and mango, and stone fruits like peaches and plums. Apples, bananas, berries, citrus fruits like oranges and lemons, tropical fruits like pineapple and mango, and stone fruits like peaches and plums"
        price="$ 3.9000000"
        location="Newport Beach, CA, USA Newport Beach, CA, USA Newport Beach, CA, USA Newport Beach, CA, USA"
      />
    </div>
  );
}

export default App;
