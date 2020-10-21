import React, {useEffect, useState} from 'react';
import './App.scss';

import {FetchUtil} from "./utils/FetchUtil";
import BookConstants from "./BookConstants";
import BookView from "./Views/BookView";
import BookDetails from "./Views/BookDetails";

const App =(props: any)=> {
    const [bookData, setBookData] = useState([])
    const [bookRef, setBookRef] =  useState({})
    const onBookClickedAction = (bookReference: any)=>{
        setBookRef(bookReference)
    }
    useEffect(()=>{
        const list = BookConstants.listName
        const apiKey = BookConstants.apiKey
        const url = 'https://api.nytimes.com/svc/books/v3/lists.json?api-key='+apiKey+'&list='+list
        FetchUtil.getData(url, setBookData)
    },[])

  return (
    <div className="App">
      <header className="app-header">
       Book List
      </header>
      <BookView bookData={bookData} bookClickedAction={(bookRef: any)=> onBookClickedAction(bookRef)}/>
      <BookDetails bookRef={bookRef}/>
    </div>
  );
}

export default App;
