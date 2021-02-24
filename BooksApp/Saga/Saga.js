import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import {Fetch_Categories,GetBooksData,
  Fetch_BestBooksList,
  SearchBooks,



} from '../Redux/Types'
import productsService from '../Services/Api'
import {GetBooksDetal} from '../Services/Api'
import Loader from '../Loader/Loader'
import {SetCategoriesBooks,SetBestBooksList,
  SetCategoriesBooksFailed,
  BestBooksListFailed,
  SetBooksDetail,
  SetBooksDetailFail,
  SetSearchBooks,
  SearchBooksFail,
  

} from "../Redux/Action";
import axios from 'axios'

  function* fetchCategories() {
  try {
   // console.log("fetch Categories ma a gaya")
    const products = yield call(productsService.getAllProducts);
   // console.log("product vaule is",products)
    if(products!=undefined)
    {
        yield put(SetCategoriesBooks(products));
    }
    else{
        yield put(SetCategoriesBooksFailed());
    }

  } catch (e) {
    console.log("error")
  }
}
 function* fetchBestBooksList() {
    try {
      const products = yield call(productsService.getBestSellingBooks);
    //  console.log("BestSelling Books is",products)
     if(products!=undefined)
     {
        yield put(SetBestBooksList(products));
     }
     else
     {
        yield put(BestBooksListFailed());
     }
    
    } catch (e) {
      console.log("error h BAHI")
    }
  }
  function* fetchBooksDetail(name) {
  
    const parent_id= name.Detail;

    try {
      const url =  `https://api.nytimes.com/svc/books/v3/lists/${parent_id}?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0`
      let result = yield call(fetch,url)
     
      const data = yield result.json()
      const product = data.results
      const books = product.books
     
     // console.log("Bookk Product value kdr hain Hello==================================  ",product)
     if(books!=undefined)
     {
     
        yield put(SetBooksDetail(books));
     }
     else
     {
     
        yield put(SetBooksDetailFail());
     }
    
    } catch (e) {
      console.log("error")
    }
  }

  function* fetchSearchBooks(name) {
  
    const parent_id= name.Search;
  
    try {
      const url =  `https://api.nytimes.com/svc/books/v3/lists/${parent_id}?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0`
      let result = yield call(fetch,url)
     
      const data = yield result.json()
      const product = data.results
      const books = product.books
    
     // console.log("Bookk Product value kdr hain Hello==================================  ",product)
     if(books!=undefined)
     {
      
        yield put(SetSearchBooks(books));
     }
     else
     {
    
        yield put(SearchBooksFail());
     }
    
    } catch (e) {
      console.log("error")
    }
  }








  export function* waitForFetchProducts() {
    yield takeLatest(Fetch_Categories, fetchCategories);
    yield takeLatest(Fetch_BestBooksList, fetchBestBooksList);
    yield takeLatest(GetBooksData, fetchBooksDetail);
    yield takeLatest(SearchBooks, fetchSearchBooks);
    
  }
    

  