import Student from "./Student"
import Test from "./Test"
import List from "./List"
import UserGreeting from "./UserGreeting"
function App() {

  const Students = [
  
    { id: 1, name: "Achapi Pentashi", age: 12 },
    { id: 2, name: "Oneil jim", age: 15 },
    { id: 3, name: "Song Banana", age: 19 },
    {
      id: 4, name: "The master", age: 23,
      id: 5, name: "Biggest Teacher", age: 20
    }
]
  const Teachers = [
  
    { id: 1, name: "Mr Fomazou", age: 54 },
    { id: 2, name: "Mr Fokam", age: 45 },
    { id: 3, name: "Mr Azoubou", age: 39 },
    {
      id: 4, name: "Mr Fonkou", age: 33,
      id: 5, name: "The Head of Department", age: 53
    }
]

  const fruits = [
        
    { id: 1, name: "apple", calories: 120 },
    { id: 2, name: "banaa", calories: 45 },
    { id: 3, name: "banana", calories: 29 },
    {
      id: 4, name: "pineapple", calories: 23,
      id: 5, name: "cucumber", calories: 23
    }
  ];

  const snacks = [
  
      
    { id: 1, name: "candy", calories: 120 },
    { id: 2, name: "biscuit", calories: 15 },
    { id: 3, name: "chocolate", calories: 29 },
    {
      id: 4, name: "cheese", calories: 10,
      id: 5, name: "burgers", calories: 23
    }]

  const vegetables = [
        
    { id: 6, name: "potatoes", calories: 120 },
    { id: 7, name: "celery", calories: 45 },
    { id: 8, name: "carrots", calories: 29 },
    {
      id: 9, name: "corn", calories: 23,
      id: 10, name: "brocolli", calories: 23
    }
  ];
  return (
    <>
         <h1 className='header' 
               
      >Achapi's Creation</h1>
      { Students.length>0 &&
      <List items={Students} category="Students" number={1} />}
      <List items={Teachers} category="Teachers" number={2} />
      
      </>
  )
 
}

export default App
