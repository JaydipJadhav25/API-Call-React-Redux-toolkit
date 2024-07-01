import './App.css';
import { useDispatch  ,useSelector} from 'react-redux';
import  {fetchTodos}  from './redux/slice/todo';







function App() {
const dispatch = useDispatch();
const todos = useSelector(s => s.todo)
  console.log("todos " , todos)

  if(todos.isLoading){
    return <h1 className='loading'>Loading...........</h1>
  }
  if(todos.isError){
    return <h1 >Error...........</h1>
  }
  return (
   <div className='App'>
        <h1 style={{backgroundColor :"Highlight"}}>API call in React Redux Toolkit</h1>
        <hr/>
      <button onClick={e => dispatch(fetchTodos())}> Fetch Todos</button>

         <div>

         {
        
        todos.data &&  todos.data.map((e) => <div>
                             <li>{e.title}</li>
                             
      </div>)

         }
           
            
         </div>

   </div>
  
 
  );
}

export default App;
