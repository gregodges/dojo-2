import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [breed, setBreed] = useState([]);
  const [page, setPage] = useState("1");

useEffect(()=> {
  fetch(`https://catfact.ninja/breeds?page=${page}`)
  .then((response) => response.json())
  .then((data) => setBreed(data.data));
},[page])
    


  return (
    <div className="App">
     <nav className="navbar">

<button disabled={ page > 1 ? false : true} className={page > 1 ? null : 'disabled'  } onClick={() => setPage(parseInt(page) - 1 )}>precedent</button> 
<button onClick={(e) => setPage(e.target.innerHTML)}>1</button>
<button onClick={(e) => setPage(e.target.innerHTML)}>2</button>
<button onClick={(e) => setPage(e.target.innerHTML)}>3</button>
<button onClick={(e) => setPage(e.target.innerHTML)}>4</button>
<button disabled={ page < 4 ? false : true} className={page < 4 ? null : 'disabled'  } onClick={() => setPage(parseInt(page) + 1 )}>suivant</button> 

</nav>
      <h1>Liste des races de chats :</h1>
      {breed.map((el) => <h2>{el.breed}</h2>)}
     
    </div>
  );
}

export default App;
