import React,{useState,useContext} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import UserItem from './UserItem';
import {GithubContext} from '../../context/github/GithubContext';

function UserResults(){
  const {state}=useContext(GithubContext);
const users=state.users;
const loading =state.loading;

  if(!loading){
  return(
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
    {users.map((user)=>{
      return(
        <UserItem key={user.id} user={user}/>
      )
    })}
    </div>
  );
}
else {
  return(
    <ClipLoader color='white' css={{marginLeft:`${window.screen.width}`/2-100}} loading={loading} size={80} />
  )
}
};

export default UserResults;
