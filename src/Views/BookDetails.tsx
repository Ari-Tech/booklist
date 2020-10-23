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
                        <div className={'details-label'}>Book Title</div>: <div className={'details-content'}>{get(props,'bookRef.book_details[0].title')}</div>
                    </p>
                    <p>
                        <div className={'details-label'}>Book Author</div>: <div className={'details-content'}>{get(props,'bookRef.book_details[0].author')}</div>
                    </p>
                    <p>
                        <div className={'details-label'}>Book Publisher</div>: <div className={'details-content'}>{get(props,'bookRef.book_details[0].publisher')}</div>
                    </p>
                    <p>
                        <div className={'details-label'}>Publication Date</div>: <div className={'details-content'}>{get(props,'bookRef.published_date')}</div>
                    </p>
                    <p>
                        <div className={'details-label'}>Description</div>: <div className={'details-content'}>{get(props,'bookRef.book_details[0].description')}</div>
                    </p>
                </div>

            </>
            }
        </div>
    )
}

export default BookDetails