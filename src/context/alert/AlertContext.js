import {createContext,useState,useReducer} from 'react';
import AlertReducer from './AlertReducer';

const AlertContext=createContext();

const AlertProvider=({children})=>{

  const initialState={
  }

  const [state,dispatch]=useReducer(AlertReducer,initialState);

 const setalert=(msg,type)=>{
   dispatch({type:'set_alert',payload:{msg,type}});
   setTimeout(()=>{dispatch({type:'remove_alert'})},3000);
 }
  return (
    <AlertContext.Provider value={{state,setalert}}>
    {children}
    </AlertContext.Provider>
  );
};
export {AlertContext,AlertProvider};
