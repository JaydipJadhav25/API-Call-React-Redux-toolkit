import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

//api call
export const fetchTodos = createAsyncThunk('fetchTodos' , async()=>{

    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            return response.json();

})


const todoSlice = createSlice({
    name :"Todo",
    initialState :{ //init data
         isLoading : false,
         data : null,
         isError : false

    },
    extraReducers : (builder) => {
           //panding
            builder.addCase(fetchTodos.pending , (state , action) =>{
                state.isLoading = true;
                // state.data = null;
            }) ;  
         //successfully
          builder.addCase(fetchTodos.fulfilled, (state , action) => {
            state.isLoading = false;
            state.data = action.payload;
          });

          //for error
          builder.addCase(fetchTodos.rejected , (state , action) =>{
            console.log("error :" , action.payload);
            state.isError = true;
            state.isLoading = true;
          })

   
    },

})

export default todoSlice.reducer;