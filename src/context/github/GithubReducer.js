const GithubReducer=(state,action)=>{
  switch(action.type){
    case 'Set_user':{
      return{
        ...state,
        users:action.payload,
        loading:false
      }
    }
    case 'Set_loading':{
      return{...state,
      loading:action.payload
    }
    }
    case 'Clear_user':{
      return{
        ...state,
        users:[],
        loading:false
      }
    }
    case 'get_user_and_repos':{
      return {
        ...state,
        user:action.payload.user,
        repos:action.payload.repos,
        loading:false,
      }
    }
    default:
    return state;
  }
};

export default GithubReducer;
