"use client";

import { useSearchParams, useRouter } from "next/navigation";

const Pagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page") ?? "1";

  const handleClick = (type: string) => {
    if (page === "1" && type === "prev") return;
    if (type === "prev" && parseInt(page) > 1) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", (parseInt(page) - 1).toString());

      router.push(`?${params.toString()}`);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", (parseInt(page) + 1).toString());
      router.push(`?${params.toString()}`);
    }
  };
  return (
    <div className="flex justify-center gap-5 items-center my-5">
      <button
        className="border rounded-sm p-3"
        onClick={() => handleClick("prev")}
      >
        Prev
      </button>
      <span>{page}</span>
      <button
        className="border rounded-sm p-3"
        onClick={() => handleClick("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
