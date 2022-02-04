import { useState, useContext,useEffect } from 'react';
import {GithubContext} from '../../context/github/GithubContext';
import {AlertContext} from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';

function UserSearch() {
  const [text,settext]=useState('');
  const {state,dispatch}=useContext(GithubContext);
  const {setalert}=useContext(AlertContext);
  const users=state.users;

  const handleChange=(e)=>{
    settext(e.target.value);
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(text===''){
      setalert('Please enter something','error');
    }
    else {
      dispatch({type:'Set_loading',payload:true});
      const data=await searchUsers(text);
      dispatch({type:'Set_user',payload:data});
      settext('');
      if(data.length===0&&state.loading===false){
        setalert('No matching results found','error');
      }
    }
  }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
    <div>
    <form onSubmit={handleSubmit}>
    <div className='form-control'>
    <div className='relative'>
    <input
    type='text'
    className='w-full pr-40 bg-gray-200 input input-lg text-black'
    placeholder='Search'
    value={text}
    onChange={handleChange}
    />
    <button
    type='submit'
    className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
    >
    Go
    </button>
    </div>
    </div>
    </form>
    </div>
    {users.length > 0 && (
      <div>
      <button className='btn btn-ghost btn-lg' onClick={()=>dispatch({type:'Clear_user'})}>
      Clear
      </button>
      </div>
    )}
    </div>
  )
}

export default UserSearch
