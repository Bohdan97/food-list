import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Products from './components/Products';
import Info from './components/Info';
import localforage from 'localforage';
import './App.css';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      imageUrl: 'some url here',
      description: 'Some text',
      name: 'Product name',
      count: 4,
      weight: '200g',
    },
    {
      id: 2,
      imageUrl: 'some url here',
      description: 'Some text ',
      name: 'Product name',
      count: 2,
      weight: '300g',
    },
    {
      id: 3,
      imageUrl: 'some url here',
      description: 'Some text ',
      name: 'Product name',
      count: 1,
      weight: '300g',
    },
  ]);

  useEffect(() => {
    localforage.keys().then((res) => {
      const promises = [];
      res.forEach((key) => promises.push(localforage.getItem(key)));
      Promise.all(promises).then((result) => setProducts(result));
    });
  }, []);

  const addTask = (task) => {
    localforage.setItem(task.id, task).then((value) => setProducts([value, ...products]));
  };

  const deleteTask = (id) => {
    localforage.removeItem(id).then(setProducts(products.filter((c) => c.id !== id)));
  };

  const findArray = (value) => {
    return products.filter((c) => c.value === value);
  };

  return (
    <Router>
      <div className="wraper">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        <div className="main">
          <Route path="/" exact>
            <Products products={products} onDelete={deleteTask} />
          </Route>
          <Route path="/:name">
            <Info findArray={findArray}  />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
