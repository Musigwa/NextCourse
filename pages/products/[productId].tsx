import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

const ProductDetails: NextPage = () => {
  const { query } = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Product details</title>
        <meta name='description' content='Application name' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>This should show the product description {query.productId}</h1>
    </Fragment>
  );
};

export default ProductDetails;
