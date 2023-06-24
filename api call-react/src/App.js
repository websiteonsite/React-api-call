import { useEffect, useState } from "react";
import { User } from "./user";
import "./App.css";
import Table from "./Table";
import axios from "axios";



//  function App() {
//    const [query, setQuery] = useState("");
//    return (
//      <div className="app">
//       <input
//          className="search"
//          placeholder="Search..."
//          onChange={(e) => setQuery(e.target.value.toLowerCase())}
//        />
//        <ul className="list">
//          {User.filter((asd) =>
//            asd.first_name.toLowerCase().includes(query)
//          ).map((user) => (
//            <li className="listItem" key={user.id}>
//              {user.first_name}
//            </li>
//          ))}
//       </ul>
//     </div>
//   );
// }

//SEARCH ON A DATATABLE

//  function App() {
//   const [query, setQuery] = useState("");

//    const keys = ["first_name", "last_name", "email"];
//   // console.log(User[0]["last_name"])

//    const Search = (data) => {
//      return data.filter(
//        (item) =>
//        keys.some((key) => item[key].toLowerCase().includes(query))
//      );
//    };

//  return (
//    <div className="app">
//        <input className="search" placeholder="Search..." onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
//      <Table data={Search(User)} />
//    </div>
//  );
//  }


// API SEARCH

 function App() {
   const [query, setQuery] = useState("");
   const [data, setData] = useState([]);

    useEffect(() => {
     const fetchData = async () => {
       const res = await axios.get(`http://localhost:5000?q=${query}`);
       setData(res.data);
     };
     if (query.length === 0 || query.length > 2) fetchData();
   }, [query]);

   return (
     <div className="app">
         <input
           className="search"
           placeholder="Search..."
           onChange={(e) => setQuery(e.target.value.toLowerCase())}
         />
       {<Table data={data} />}
     </div>
   );
 }

 export default App;