import axios from 'axios';

const github=axios.create({
  baseURL:process.env.REACT_APP_GITHUB_URL,
  headers:{
    Authorization:`${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});

export const searchUsers=async(text)=>{
  const response= await github.get(`/search/users?q=${text}`);
  const data=response.data.items;
  return data;
};



export const getUserandRepos=async(text)=>{
  try{
    const [user,repos]= await Promise.all(
      [github.get(`/users/${text}`),
        github.get(`/users/${text}/repos?sort=created&&per_page=10`)]);
        return {user:user.data,repos:repos.data};
      }
      catch(e){
        return {user:404,repos:'not found'};
      }
    };
