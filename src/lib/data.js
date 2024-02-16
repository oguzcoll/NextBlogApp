import { User } from "./models";
import { Post } from "./models";
import { connctToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connctToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get post");
  }
};

export const getPost = async (slug) => {
  try {
    connctToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get posts");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connctToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get posts");
  }
};

export const getUsers = async () => {
  try {
    connctToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get posts");
  }
};
