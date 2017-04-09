import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };
//empty array is list of blog posts
//post is the single shown post

export default function(state = INITIAL_STATE, action){
  switch(action.type){
  case FETCH_POSTS:
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
