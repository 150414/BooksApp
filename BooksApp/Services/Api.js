import axios from 'axios'
import { delay } from 'redux-saga/effects';



function service() {
  const getAllProducts = () => {
    return fetch(
      'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=zwTsVGzlFwALheo6oGVio9BJbBxMrpt9',
      
    )
      .then((res) => res.json())
      .then((data) => data.results)
      .catch((e) => e);
  };


  const getBestSellingBooks = () => {
    return fetch(
      'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=zwTsVGzlFwALheo6oGVio9BJbBxMrpt9',
      
    )
      .then((res) => res.json())
      .then((data) => data.results)
      .catch((e) => e);
  };
  const  getBookDetail = (name) => {c
    delay(1000000)
    return fetch(
      `https://api.nytimes.com/svc/books/v3/lists/${name}?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0`,
      
    )
      .then((res) => res.json())
      .then((data) => data.results)
      .catch((e) => e);
      
  };


  return {
    getAllProducts,
    getBestSellingBooks,
    getBookDetail,
  };
}

const productsService = service();

export default productsService;
// export async function GetBooksDetal(name)
//   {
 

//      console.log("hello get API DATA")
     
  
//  var resp =   `https://api.nytimes.com/svc/books/v3/lists/${name}?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0`
//   response = await axios.get(resp)
   
//  const Currentdata = response.data.results
//  console.log("value is ya haa paiiii ji",Currentdata)
//  return Currentdata
 
// }