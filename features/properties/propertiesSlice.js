import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    propertyType: "",
    location: "",
    price: {
        min: 0,
        max: 0,
    },
    amenities: [],
    status: "",
    bathrooms: "",
    bedrooms: "",
    garages: "",
    yearBuilt: "",
    area: {
        min: "",
        max: "",
    },
    length: 0,
};

export const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
        addKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        addPropertyType: (state, action) => {
            state.propertyType = action.payload;
        },
        addLocation: (state, action) => {
            state.location = action.payload;
        },
        
        addStatus: (state, action) => {
            state.status = action.payload;
        },
        addLength: (state, action) => {
            state.length = action.payload;
        },
    },
});

export const {
    addKeyword,
    addPropertyType,
    addLocation,
    addStatus,
    addLength,
} = propertiesSlice.actions;
export default propertiesSlice.reducer;
