import Link from 'next/link';
import React from 'react'
import Layout from '/src/components/admin/Layout';

export default function page() {
    return (
        <Layout>
            <Link className='bg-blue-900 text-white rounded-md py-1 px-2' href={'/products/new'}>Add new product</Link>
        </Layout>
    )
}
