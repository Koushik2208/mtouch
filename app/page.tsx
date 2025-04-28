import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden justify-center items-center">
      Home Page
      <Link href="/products">Go to products</Link>
    </div>
  );
};

export default Home;
