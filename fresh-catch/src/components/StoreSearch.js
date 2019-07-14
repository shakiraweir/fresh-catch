import React from 'react';
import { render } from 'react-dom';

class StoreSearch extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form className='store-selector'>
                    <h2>Search stores for pickup</h2>
                    <input type='text' required placeholder='Store Name' />
                    <button type='submit'>See today's selection</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StoreSearch;
