import React from 'react';
import {mount, render, shallow} from 'enzyme';
import BookView from "../Views/BookView";

describe('test BookView', ()=>{
    it('test BookView render', ()=>{
        const result = shallow(<BookView bookData={[]} bookClickedAction={jest.fn()}/>)
        expect(result).toBeDefined()
    })
    it('test BookView render with data', ()=>{
        const result = shallow(<BookView bookData={[{
            "list_name": "Combined Print and E-Book Nonfiction",
            "display_name": "Combined Print & E-Book Nonfiction",
            "bestsellers_date": "2020-10-17",
            "published_date": "2020-11-01",
            "rank": 1,
            "rank_last_week": 5,
            "weeks_on_list": 11,
            "asterisk": 0,
            "dagger": 0,
            "amazon_product_url": "https://www.amazon.com/dp/0593230256?tag=NYTBSREV-20&tag=NYTBS-20",
            "isbns": [
                {
                    "isbn10": "0593230256",
                    "isbn13": "9780593230251"
                },
                {
                    "isbn10": "0593241460",
                    "isbn13": "9780593241462"
                }
            ],
            "book_details": [
                {
                    "title": "CASTE",
                    "description": "The Pulitzer Prize-winning journalist examines aspects of caste systems across civilizations and reveals a rigid hierarchy in America today.",
                    "contributor": "by Isabel Wilkerson",
                    "author": "Isabel Wilkerson",
                    "contributor_note": "",
                    "price": 0,
                    "age_group": "",
                    "publisher": "Random House",
                    "primary_isbn13": "9780593230251",
                    "primary_isbn10": "0593230256"
                }
            ],
            "reviews": [
                {
                    "book_review_link": "",
                    "first_chapter_link": "",
                    "sunday_review_link": "",
                    "article_chapter_link": ""
                }
            ]
        }]} bookClickedAction={jest.fn()}/>)
        expect(result).toBeDefined()
        expect(result.find('.book-list-view').exists()).toBeTruthy()
        expect(result.find('.row-container-book').length).toEqual(2)
    })
})