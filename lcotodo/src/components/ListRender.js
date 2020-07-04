import React from "react";
import Person from './Person'
function ListRender() {
//   const names = ["Bruce", "Clark", "Diana"];
// const namesList = names.map(name=> <h2>{name}</h2>)
const persons = [
    {
        id:1,
        name: 'Chakshu',
        age: 21
    },
    {
        id:2,
        name: 'divesh',
        age: 22
    },
    {
        id:3,
        name: 'Tanuj',
        age: 21
    },
    {
        id:4,
        name: 'Gujjar',
        age: 22
    }
]
// const personList = persons.map(person=>(
// <h2> I am {person.name} and i am {person.age} years old</h2>

// ))
const personList = persons.map(person => <Person key = {person.id} person = {person} />)
  return(
      <div>
          {/* {namesList} */}
          {personList}
      </div>
  )
}

export default ListRender;
