import React from 'react';

class StoreSearch extends React.Component {
    render() {
        return (
                <form className='store-selector'>
                    <h2>Search stores for pickup</h2>
                    <input 
                        type='text' 
                        required placeholder='Search by city, state, or zipcode' 
                    />
                    <button type='submit'>Search</button>
                </form>
        )
    }
}

export default StoreSearch;
