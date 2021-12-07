import './App.css';
import React from 'react'
import Category from './components/Category';
import axios from 'axios';
import { useQuery } from 'react-query'



function App() {

  async function fetchData() {
    const { data } = await axios.get(
      "https://api.dev.propertymatch.mt/api/manifests/app-config"
    );
    return data.property_types;
  }
  const { data, error, isLoading } = useQuery("housing", fetchData);

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <main>
      {!isLoading && <div>  {data.map((item) => <Category index={item.id} title={item.name} subcategories={item.categories} key={item.id} parentLength={item.categories.length} />)}
      </div>}
    </main>
  );
}

export default App;
