import { Fragment } from "react";
import Person from "./components/Person/Person";
import Card from "./components/Card/Card";
function App() {
  // if random num is 7 show a image other write some line bettter luck next time.

  // let randomnum = Math.floor(Math.random() * 10 + 1);
  // console.log(randomnum);
  // const luckynum = 7;  let name = "Pushti";


  return (
    <>

      {/* <h1>This is app component</h1>
      <h2>Name: {name}</h2>
      {randomnum == luckynum ? "You are lucky" : "btter luck next time"}; */}

      {/* <Person name="Harsh" age="23" school="Renassance"> The sentence inside person</Person> */}
      {/* <Person name="Manish" age="24" school="BPS"></Person>
      <Person name="Himanshu" age="19" school="DPS"></Person>
      <Person name="Mayank" age="22" school="APS"></Person>
      <Person name="AMan" age="24" school="DPS"></Person> */}

      <Card

        img="https://images.unsplash.com/photo-1725493280276-658ff7d29fd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
        name="Mona Lisa"
        price={50}
      ></Card >
      <Card

        img="https://images.unsplash.com/photo-1725493280276-658ff7d29fd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
        name="Mona Lisa"
        price={50}
      ></Card >
      <Card

        img="https://images.unsplash.com/photo-1725493280276-658ff7d29fd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
        name="Mona Lisa"
        price={50}
      ></Card >
    </>
  );
}

export default App;