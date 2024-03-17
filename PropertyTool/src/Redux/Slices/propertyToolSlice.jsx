import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  propertyData: [
    {
      id: 0,
      Checked: false,
      Address: '123 Main Street',
      PostCode: 'ABC123',
      PropertyType: 'Flat',
      NoOfRooms: '3',
      FloorArea: '1500 sqft'
    },
    {
      id: 1,
      Checked: false,
      Address: '456 Elm Avenue',
      PostCode: 'DEF456',
      PropertyType: 'Taracced house',
      NoOfRooms: '2',
      FloorArea: '1000 sqft'
    },
    {
      id: 2,
      Checked: false,
      Address: '789 Oak Boulevard',
      PostCode: 'GHI789',
      PropertyType: 'Semi-detached',
      NoOfRooms: '1',
      FloorArea: '800 sqft'
    },
    {
      id: 3,
      Checked: false,
      Address: '1011 Pine Road',
      PostCode: 'JKL101',
      PropertyType: 'Taracced house',
      NoOfRooms: '4',
      FloorArea: '2000 sqft'
    },
    {
      id: 4,
      Checked: false,
      Address: '1315 Cedar Lane',
      PostCode: 'MNO131',
      PropertyType: 'Flat',
      NoOfRooms: '2',
      FloorArea: '1200 sqft'
    }
  ],
  selectedProperty: [],
  searchedProperty: []
}

export const propertyToolSlice = createSlice({
  name: 'propertytool',
  initialState,
  reducers: {
    updateSelectProperty: (state, action) => {
      const existing = state.selectedProperty.findIndex(item => item.id === action.payload.id);
      if (existing !== -1) {
        // If the item already exists, remove it
        state.selectedProperty = state.selectedProperty.filter(item => item.id !== action.payload.id);
      } else {
        // If the item doesn't exist, add it
        state.selectedProperty = [...state.selectedProperty, action.payload];
      }
    },
    updateSearchedProperty: (state, action) => {
      if (action.payload == '') {
        state.searchedProperty = state.propertyData;
      }
      else {
        const filteredResults = state.propertyData.filter(property => property.Address.includes(action.payload));
        console.log('Filtered Search Reasults', filteredResults)
        state.searchedProperty = filteredResults;
      }

    }
  },
})

// Action creators are generated for each case reducer function
export const { updateSelectProperty, updateSearchedProperty } = propertyToolSlice.actions

export default propertyToolSlice.reducer