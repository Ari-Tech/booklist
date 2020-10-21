// @ts-ignore
import {get} from 'lodash';
const FetchUtil ={
    getData: (url: string, setData: any)=>{
        fetch(url)
            .then(response => response.json())
            .then(data => setData(get(data, 'results')));
    }
}

export {FetchUtil}