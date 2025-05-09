"use client";

import Pagination from "@/components/Pagination";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const ProductsPage = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
  const [products, setproducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const products = await fetch(`${API_BASE_URL}/products?page=${page}`);
      const { data } = await products.json();
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 justify-center gap-5">
        {products.length > 0 &&
          products.map((product) => (
            <Link
              href={`products/${product.id}`}
              key={product.title}
              className="flex flex-col w-[200px] border rounded-sm gap-5 p-5"
            >
              <div>
                <div className="h-[200px] flex justify-center items-center">
                  <Image
                    src={product.image}
                    alt="product image"
                    width={100}
                    height={100}
                    objectFit="fill"
                  />
                </div>
                <h5 className="line-clamp-2 h-[50px] overflow-hidden font-bold">
                  {product.title}
                </h5>
              </div>
            </Link>
          ))}
      </div>
      <Pagination />
    </>
  );
};
const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPage />
    </Suspense>
  );
};

export default Page;
