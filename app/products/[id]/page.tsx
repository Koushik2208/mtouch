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

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const detail = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await detail.json();
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <Image src={product.image} alt="product image" width={300} height={300} />
      <h1 className="font-bold text-2xl">{product.title}</h1>
    </div>
  );
};

export default ProductDetails;
