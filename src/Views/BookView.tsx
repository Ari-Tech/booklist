
import React, {useEffect, useState} from 'react';
import logo from '../assets/logo.svg'
export interface IBookView{
    bookData: any[]
    bookClickedAction: any
}

const BookView = (props: IBookView)=>{
    const bookClickedAction =(bookRef: any)=>{
        props.bookClickedAction(bookRef)
    }
    return (<div className={'book-list-view'}>
        <div className={'row-container-book'}>
            <div className={'flex-direction-row-header'}>Title</div>
            <div className={'flex-direction-row-header'}>Publisher</div>
            <div className={'flex-direction-row-header'}>Author</div>
        </div>
        {
            props.bookData.length>0?
            props.bookData.map((book: any)=>{
                return (
                    <div className={'row-container-book'} onClick={()=> bookClickedAction(book)}>
                        <div className={'flex-direction-row'}>
                        <div className={'flex-direction-cell'}>{book.book_details[0].title}</div>
                        <div className={'flex-direction-cell'}>{book.book_details[0].publisher}</div>
                        <div className={'flex-direction-cell'}>{book.book_details[0].author}</div>
                        </div>
                    </div>
                )
            }): <img src={logo} width={50} height={50} className={'loading-logo'}></img>
        }
    </div>)
}

export default BookView