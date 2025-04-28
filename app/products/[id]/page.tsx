// import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

// export const getServerSideProps = (async ({params}) => {
//   const { id } = await params;
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

import Image from "next/image";
import React from "react";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const detail = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await detail.json();
  console.log(product);
  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.image} alt="product image" width={300} height={300} />
    </div>
  );
};

export default ProductDetails;
