import {createContext,useState,useReducer} from 'react';
import GithubReducer from './GithubReducer';
import {Navigate} from 'react-router-dom';

const GithubContext=createContext();

const GithubProvider=({children})=>{
  const initialState={
    users:[],
    user:{},
    repos:[],
    loading:false
  }
  const [state,dispatch]=useReducer(GithubReducer,initialState);

  return (
    <GithubContext.Provider value={{state,dispatch}}>
    {children}
    </GithubContext.Provider>
  );
};
export {GithubContext,GithubProvider};
