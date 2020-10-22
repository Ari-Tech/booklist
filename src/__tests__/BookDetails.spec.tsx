import React from 'react';
import BookDetails from "../Views/BookDetails";
import {mount, shallow} from 'enzyme';
describe('Test Book Details', ()=>{
    it('Test basic render', ()=>{
        const component = shallow(<BookDetails bookRef={
            {
                "list_name": "Combined Print and E-Book Nonfiction",
                "display_name": "Combined Print & E-Book Nonfiction",
                "bestsellers_date": "2020-10-10",
                "published_date": "2020-10-25",
                "rank": 1,
                "rank_last_week": 0,
                "weeks_on_list": 1,
                "asterisk": 0,
                "dagger": 0,
                "amazon_product_url": "",
                "isbns": [
                    {
                        "isbn10": "1250114292",
                        "isbn13": "9781250114297"
                    }
                ],
                "book_details": [
                    {
                        "title": "HUMANS",
                        "description": "Photos and stories of people from over 40 countries collected by the creator of “Humans of New York.”",
                        "contributor": "by Brandon Stanton",
                        "author": "Brandon Stanton",
                        "contributor_note": "",
                        "price": 0,
                        "age_group": "",
                        "publisher": "St. Martin's",
                        "primary_isbn13": "9781250114297",
                        "primary_isbn10": "1250114292"
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
            }
        }/>);
        expect(component).toBeDefined()
    })
})

