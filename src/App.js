import React from 'react';
import './App.scss';
import Header from './components/Header'
import Recepie from './components/Recepie';

function App() {
  let [recipe, setResipe] = React.useState(null)


  React.useEffect(() => {
    nextRecipe()
  }, [])
    function nextRecipe() {
      if(recipe){
        document.querySelector('.recepie').style.animation = 'fadeOut 1s'
        
      }
      setTimeout(() => {
        setResipe(null)
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => setResipe(data['meals'][0]))
      }, 1000);
      
    }

  return (
    <div className="App">
      <Header />
      {recipe && <Recepie recipe={recipe} nextRecipe={nextRecipe} />}
    </div>
  );
}

export default App;
