import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';

const Products: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>This contains a list of products</h1>
      <Link href={{ pathname: '/products', query: { productId: 7989 } }}>
        CLick to see more details
      </Link>
    </div>
  );
};

export default Products;
