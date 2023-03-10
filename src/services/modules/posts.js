import { dummyApi } from './api';

const postService = {
    getPosts: (page, limit) => dummyApi.get(`/post?page=${page}&limit=${limit}`)
    // getPost: (id) => mockApi.get(`/posts/${id}`),
    // createPost: (data) => mockApi.post('/posts', data),
    // updatePost: (id, data) => mockApi.put(`/posts/${id}`, data),
    // deletePost: (id) => mockApi.delete(`/posts/${id}`)
};

export default postService;
