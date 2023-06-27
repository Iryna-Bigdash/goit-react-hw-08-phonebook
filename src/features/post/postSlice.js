import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  { id: '1', title: 'Nice App for contacts list', 
    content: 'I have used the application at first. One of the most remarkable features of a phone book application is the ability to add contacts to your list effortlessly.',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
 },
  { id: '2', 
    title: 'Great PhoneBook', 
    content: 'As a PhoneBook user, I find it incredibly convenient to add new contacts, delete unnecessary ones, and quickly find the people I need. The app ensures the secure storage of my data and offers powerful filtering capabilities.',
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
 }
];

export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postAdded: {
        reducer(state, action){
        state.push(action.payload)
    },
    prepare(title, content, userId){
        return{
            payload: {
                id: nanoid(),
                title,
                content,
                date: new Date().toISOString(), 
                userId,
                reactions: {
                    thumbsUp: 0,
                    wow:0,
                    heart:0,
                    rocket:0,
                    coffee:0
                }
            }
        }
    }
},
reactionAdded: (state, action) => {
    const { postId, reaction } = action.payload;
    const existingPost = state.find((post) => post.id === postId);
    if (existingPost) {
      existingPost.reactions[reaction]++;
    }
  },
},
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded} = postsSlice.actions;
export default postsSlice.reducer;

