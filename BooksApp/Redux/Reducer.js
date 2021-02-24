import React, { Component ,useState} from 'react';
import{
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import Loader from '../Loader/Loader'
  let state ={
      data:'',
      BestBooks:'',
      BookDetail:'',
      isLoading: false,
      Search:'',
  }
  const mainReducer=(state=state,action)=>
  {
      if(action.type==="GET Categories")
      {
          return{
              ...state,
              data:action.data
          }
        }
          else if(action.type==="GET BooksList")
          {
          return{
            ...state,
            BestBooks:action.data
        }
        
      }
      else if(action.type==="Fetch_CategoriesFail")
      {
      return{
        ...state
    }
    
  }
  else if(action.type==="Fetch_BooksListFail")
  {
  return{
    ...state
}
  }
else if(action.type==="GET Books")
{
return{
  ...state,
  BookDetail:action.data
}
}
else if(action.type==="Fetch_BooksListFail")
{
return{
  ...state
}
}
else if(action.type==="Search")
{
return{
  ...state,
  Search:action.data
}
}
else if(action.type==="SearchBooks")
{
return{
  ...state
}
}
else if(action.type==="GetBooksDetailFail")
{
return{
  ...state
}

}
      else
      {
          return{
              ...state
          }
          
      }
  }
  export default mainReducer;