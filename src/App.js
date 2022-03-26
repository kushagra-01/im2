import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  useEffect(()=>{getdata()},[])

  const [db,setdb]=useState([])
  const [data,setdata]=useState()


console.log(db,"db")



const getdata =()=>{
  axios.get("https://randomuser.me/api").then(({data})=>{
  setdb(data.results[0])
  ;});

}


  return (
    <div className="App">

<img src={db.picture?.large} className="photo" alt=""/>
<br />
<h1>{data}</h1>

<div className="d-flex flex-row bd-highlight mb-3">
<span class="material-icons-outlined" onMouseEnter={(()=>{setdata(`Hi, My name is ${db.name?.title} ${db.name?.first}${db.name?.last}`)})}>
account_circle
</span>
<span class="material-icons-outlined" onMouseEnter={(()=>{setdata(` My email is${db.email}`)})}>
email
</span>
<span class="material-icons-outlined" onMouseEnter={(()=>{setdata(`My DOB is ${db.dob?.date}`)})}>
calendar_month
</span>
<span class="material-icons-outlined" onMouseEnter={(()=>{setdata(`My address is ${db.location?.city} ${db.location?.state}`)})}>
location_on
</span>
<span class="material-icons-outlined" onMouseEnter={(()=>{setdata(` My Number is ${db.cell}`)})}>
call
</span>
<span class="material-icons-outlined" onMouseEnter={(()=>{setdata(`My password is ${db.login?.password}`)})}>
lock
</span>
</div>

    </div>
  );
}

export default App;

// {"results":[{"gender":"male","name":{"title":"Mr","first":"Miguel","last":"Simmmons"},"location":{"street":{"number":5096,"name":"Alexander Road"},"city":"Bangor","state":"Bedfordshire","country":"United Kingdom","postcode":"X6 0FR","coordinates":{"latitude":"6.9584","longitude":"-100.8385"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"miguel.simmmons@example.com","login":{"uuid":"bd980007-9f6b-4678-bbf7-44f0567c5651","username":"whitekoala342","password":"positive","salt":"K9xRyEHD","md5":"ba27b38314e454fefdc33762ebfe4cc2","sha1":"93bdf561b10cbd9e85a90574c98ddfc4f2f2a879","sha256":"9c667b95b5e517b83d719b4f0854ea8c211bf62664c567f91fcbde2260f01500"},"dob":{"date":"1959-09-24T01:57:09.164Z","age":63},"registered":{"date":"2018-10-29T15:23:55.103Z","age":4},"phone":"023 1895 1641","cell":"0703-462-153","id":{"name":"NINO","value":"CZ 27 50 88 H"},"picture":{"large":"https://randomuser.me/api/portraits/men/5.jpg","medium":"https://randomuser.me/api/portraits/med/men/5.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/5.jpg"},"nat":"GB"}],"info":{"seed":"adc9802d745dec08","results":1,"page":1,"version":"1.3"}}