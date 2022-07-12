import { combineReducers } from "@reduxjs/toolkit";
import eventsSlice from "../features/eventsSlice";
import modulesSlice from "../features/modulesSlice";
import userConnectedSlice from "../features/userConnectedSlice";
import usersSlice from "../features/usersSlice";
import currentEventSlice from '../features/currentEventSlice';


export const rootReducer = combineReducers({
    events: eventsSlice,
    modules: modulesSlice,
    users: usersSlice,
    userConnected: userConnectedSlice,
    targetEvent: currentEventSlice 

})