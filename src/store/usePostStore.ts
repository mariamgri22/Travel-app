import create from "zustand";
import api from "../token";
import { v4 as uuidv4 } from 'uuid'; // import the v4 function from uuid

type Post = {
  id: string; 
  title: string;
  content: string;
};

type PostStore = {
  posts: Post[];
  getPosts: () => Promise<void>;
  createPost: (post: Omit<Post, "id">) => Promise<void>; 
  updatePost: (post: Post) => Promise<void>;
  deletePost: (id: string) => Promise<void>; 
};

const usePostStore = create<PostStore>((set) => ({
  posts: [],
  getPosts: async () => {
    try {
      const response = await api.get("/posts");
      set({ posts: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (post: Omit<Post, "id">) => { // change the function signature
    try {
      const newPost = {
        ...post,
        id: uuidv4() 
      };
      const response = await api.post("/posts", newPost);
      set((state) => ({ posts: [...state.posts, response.data] }));
    } catch (error) {
      console.log(error);
    }
  },
  updatePost: async (post: Post) => {
    try {
      await api.put(`/posts/${post.id}`, post);
      set((state) => ({
        posts: state.posts.map((p) => (p.id === post.id ? post : p)),
      }));
    } catch (error) {
      console.log(error);
    }
  },
  deletePost: async (id: string) => { 
    try {
      await api.delete(`/posts/${id}`);
      set((state) => ({
        posts: state.posts.filter((p) => p.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default usePostStore;


