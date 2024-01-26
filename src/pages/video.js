import React from 'react';
import Layout from '@theme/Layout';

export default function Video() {
  return (
    <Layout title="视频" description="视频">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <img src="/img/kuaishou.webp" alt="" />
      </div>
    </Layout>
  );
}