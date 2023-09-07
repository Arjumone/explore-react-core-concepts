import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'
import Student from './Student'
import Developer from './Developer'
import Device from './Device'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actors = ['sakib','jashim','zia','siam']
  const singers = [
    {name:'mahfuz',age:40},
    {name:'eva',age:45},
    {name:'tahsan',age:30},
    {name:'agun',age:20},
  ];
  const books =[
    {id:1,name:'Physics',price:100},
    {id:2,name:'Chemistry',price:120},
    {id:3,name:'Biology',price:150},
    {id:4,name:'Math',price:200},
  ]
  return (
    <>  
      <h1>Vite + React</h1>
      <Person></Person>
      <Student grade='A7' score='99'></Student>
      <Student grade='A3' score='45'></Student>
      <Student></Student>
      <Developer></Developer>
      <Device name='Laptop' price='50000'></Device>
      <Todo task='learn react' isDone={true} ></Todo>
      <Todo task='try jsx' isDone={false} ></Todo>
      <Todo task='core concepts' isDone={true} ></Todo>
      <Actor name={'bappa'}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }
      <Singer></Singer>
      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }
      <BookStore books={books}></BookStore>
    </>
  )
}



export default App
