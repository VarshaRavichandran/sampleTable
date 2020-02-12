import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


/*const JsonTable = require('ts-react-json-table');
const App = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://json-faker-server.herokuapp.com/users");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }
export default function App(){
  const [nasaData, setData]=useState({})
console.log('point 1')
  async function fetchData(){
    const res=await fetch("https://json-faker-server.herokuapp.com/users")
    console.log(res)
    const data=res.json()
    //console.log(data)
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData();
  }, []);
 //console.log(planets.id);
 //ReactDOM.render(<JsonTable rows = {planets[2]} />, document.body);
  return (
    <div>
      <p>{nasaData.title}</p>
    </div>
  );
}

//export default App;
*/

/*var url = 'https://json-faker-server.herokuapp.com/users';
export default function App(){
return(fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  }));
}*/

import axios from 'axios';
const JsonTable = require('ts-react-json-table');
function App() {
  const [data, setData] = useState({});
  useEffect(async () => {
    const result = await axios(
      'http://localhost:1337/api/roles',
    );
    setData(result.data);
  }, []);
  var d=data['roles'];
  //var da=[];
  console.log(data)
  //console.log(d[0])
 // console.log(da)
  return (
    <JsonTable rows = {d} />
  );
}
export default App;