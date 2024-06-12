
import { createStore } from "redux";

///// creator action 

export const addNote =(note)=>{
    return({
        type:"ADD_NOTE",
        payload : note
    });
};
export const removeNote =(title)=>{
    return({
        type:"REMOVE_NOTE",
        payload:title
    });
}

//// reducer
const initialState = {
    notes:[
        {
            title : "sleeping",
            contenu : "sleep in bad not ask fo that"
        }
    ]
}

export const notesReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_NOTE":
            return {
                ...state,
                notes:[...state.notes,action.payload]
            };
        case "REMOVE_NOTE":
            return {
                notes:[
                    ...state.notes.filter(note=>note.title !== action.payload)
                ]
            }; 
        default:
            return state       

    };
};
/// create store
export const store = createStore(notesReducer)
