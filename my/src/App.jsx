// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Inputs from "./components/inputs.jsx";

const App = () => {
  const [values,setValues] = useState({
    username:"",
    email:"",
    dob:"",
    password:"",
    photo:"", 
  });

  const inputs = [
    {
      id:1,
      name:"username",
      text:"text",
      placeholder:"username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      label:"username"
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage: "Enter a valid email address",
      label:"email"
    },
    {
      id:3,
      name:"DOB",
      type:"date",
      placeholder:"DOB",
      label:"DOB"
    },
    {
      id:4,
      name:"password",
      text:"text",
      placeholder:"password",
      errorMessage:"Password should be between 8-12 characters and include atleast 1 letter, 1 number and 1 special character",
      label:"password"
    },
    {
      id:5,
      name:"photo",
      type:"file",
      placeholder:"photo",
      label:"photo"
    }
  ]

  const handleSubmit = (e)=>{
    e.preventDefault(); 
    console.log(values);
  };

const onChange = (e)=>{
  console.log(e.target);
  setValues({...values, [e.target.name]: e.target.value }); 
};

  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
         <h1>Registeration Form</h1>
         {inputs.map((input) => (
          <Inputs key={input.id} {...input} value={values[input.name]} onChange={onChange}/>

         ))}
          <button>Submit</button>     
      </form>
    </div>
  );
}

export default App;
