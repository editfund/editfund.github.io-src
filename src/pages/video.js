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
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          快手
        </p>
        <img src="/img/kuaishou.webp" alt="" />
      </div>
    </Layout>
  );
}