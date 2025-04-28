// import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

// export const getServerSideProps = (async (context) => {
//   const { id } = await context.query;
//   // Fetch data from external API
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const product: Product = await res.json();
//   // Pass data to the page via props
//   return { props: { product } };
// }) satisfies GetServerSideProps<{ product: Product }>;

// export default function Page({
//   product,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <main>
//       <p>{product.title}</p>
//     </main>
//   );
// }

import React from "react";

const ProductDetails = () => {
  return <div>ProductDetails</div>;
};

export default ProductDetails;
