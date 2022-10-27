
import './App.css';
import {Button} from '@mui/material';
import News from './Components/News/News';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
 
 useEffect(()=>{
  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=bcf0cb46243b4919b010f83873ee003f';
  fetch(url)
  .then(res => res.json())
  .then(data => setArticles(data.articles))
 }, [])
  return (
    <div className="App">
       <p>headlines: {articles.length} </p>
       {
       articles.map(article => <News article={article}></News>)
       }
    </div>
  );
}

export default App;
