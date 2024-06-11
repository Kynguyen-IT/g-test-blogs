import request from '../../requests';
import { Blog } from './type';

const blogApi = {
  getBlogs: async () =>
    request<Blog[]>({
      url: '/api/blogs',
      method: 'GET',
    }),

  getBlog: async (id: string) =>
    request<Blog>({
      url: `/api/blogs/${id}`,
      method: 'GET',
    }),
};

export default blogApi;
