import React, {useEffect, useState} from 'react';
import {get, isEmpty} from 'lodash';

export interface IBookDetails{
    bookRef: any
}
const BookDetails = (props: IBookDetails)=>{
    return (
        <div className={'book-details'}>
            {
                isEmpty(props.bookRef)?
                    null:
            <>
                <div className={'details-header'}>Book Details</div>
                <div>
                    <p>
                        <span className={'details-label'}>Book Title</span>: {get(props,'bookRef.book_details[0].title')}
                    </p>
                    <p>
                        <span className={'details-label'}>Book Author</span>: {get(props,'bookRef.book_details[0].author')}
                    </p>
                    <p>
                        <span className={'details-label'}>Book Publisher</span>: {get(props,'bookRef.book_details[0].publisher')}
                    </p>
                    <p>
                        <span className={'details-label'}>Publication Date</span>: {get(props,'bookRef.published_date')}
                    </p>
                    <p>
                        <span className={'details-label'}>Description</span>: {get(props,'bookRef.book_details[0].description')}
                    </p>
                </div>

            </>
            }
        </div>
    )
}

export default BookDetails