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
  import axios from 'axios'
  import {SearchBooks,Fetch_Categories,Fetch_BestBooksList,Fetch_BooksListFail,GetBooksData,GetBooksDetailFail} from './Types'
  export  function GetApiData(){

      return{
        type:Fetch_Categories
      };
    }
    export  function GetBooksList(){

        return{
          type:Fetch_BestBooksList
        };
      }
      export  function GetBooksDetail(name){
   
        return{
          type:GetBooksData,
          Detail:name
        };
      }

      export  function GetSearchBooks(name){
          return{
            type:SearchBooks,
            Search:name
          };
        }

        export function SetSearchBooks(data)
        {
            
            return{
                type:"Search",
                data:data
            }
        }
        export function SearchBooksFail(data)
        {
            
            return{
                type:"SearchBooks",
              
            }
        }



    
      export function SetBooksDetail(data)
      {
          
          return{
              type:"GET Books",
              data:data
          }
      }
      export function SetBooksDetailFail()
      {
          
          return{
              type:"GetBooksDetailFail",
              
          }
      }
    
    
    export function SetCategoriesBooks(data)
    {
        console.log("data is",data)
        return{
            type:"GET Categories",
            data:data
        }
    }
    export function SetCategoriesBooksFailed()
    {
        return{
            type:"Fetch_CategoriesFail",
    
        }
    }
    export function SetBestBooksList(data)
    {
        console.log("best Selling books",data)
        return{
            type:"GET BooksList",
            data:data
        }
    }
    export function BestBooksListFailed()
    {
        return{
            type:"Fetch_BooksListFail",
        }
    }