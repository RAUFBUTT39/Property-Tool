import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchedProperty } from '../../Redux/Slices/propertyToolSlice';
import PropertyToolTypography from '../SharedComponents/PropertyToolTypography';
import { useTheme } from '@mui/material';

const SearchProperties = () => {
    const [searchText, setSearchText] = useState('');
    
    const theme = useTheme()
    const dispatch = useDispatch()
    // console.log('Properties',properties)

    useEffect(() => {
            const delay = 500; 
            const timer = setTimeout(() => {
                search();
            }, delay);

            return () => clearTimeout(timer);
        // }
    }, [searchText]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value.trim());
    };

    const handleSearchButtonClick = useCallback(() => {
        /** No need of debouncing */
        search();
      }, [searchText]);

    const search = () => {
        dispatch(updateSearchedProperty(searchText))
    };

    return (
        <div>
            <PropertyToolTypography>Search</PropertyToolTypography>
            <input 
            style={{ background: theme.palette.primary.graybackgroundlight, border: `2px solid ${theme.palette.primary.graybackgrounddark}` , height: '24px', padding:'8px' ,width: '80%', margin: '32px 16px 32px 0px',}}
                type="text" 
                value={searchText} 
                onChange={handleSearchChange} 
                placeholder="Address" 
            />
            <button style={{ background: 'yellow', border:'2px solid darkyellow' , color: theme.palette.primary.heading, width:'150px', height: '40px', padding:'8px'}} disabled={!searchText.length} onClick={handleSearchButtonClick}>Search</button>
            {/* <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default SearchProperties;
