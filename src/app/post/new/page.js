import PostForm from '@/components/admin/PostForm';
import Layout from '/src/components/admin/Layout';

export default function page() {
  return (
    <Layout>
        <h1 className="text-xl ml-1">New Post</h1>
        <PostForm/>
    </Layout>
  )
}
