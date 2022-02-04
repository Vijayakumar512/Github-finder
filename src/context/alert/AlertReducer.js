const AlertReducer=(state,action)=>{
  switch(action.type){
    case 'set_alert':{
      return action.payload;
    }

    case 'remove_alert':{
      return {};
    }
    default:
    return state;
  }
};

export default AlertReducer;
