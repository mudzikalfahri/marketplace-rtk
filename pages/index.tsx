import Filters from "@/components/Filter";
import MainLayout from "@/components/layouts/MainLayout";
import ProductCardSkeleton from "@/components/loading/ProductCardSkeleton";
import ProductCard from "@/components/ProductCard";
import { useGetPostsQuery } from "@/core/redux/slices/posts/queries";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { isLoading, data } = useGetPostsQuery();
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto py-32">
        {/* <SaleSection /> */}
        <section>
          <div className="px-8 py-8">
            <div>
              <span className="inline-block w-12 h-1 bg-gray-700" />

              <h2 className="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
                Shop
              </h2>
            </div>
            <div className="grid grid-cols-4">
              <Filters />

              <div className="col-span-3 grid grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                {isLoading &&
                  [...new Array(10)].map((a, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ProductCardSkeleton key={idx} />
                  ))}
                {data &&
                  data.map((product) => (
                    <ProductCard data={product} key={product.id} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
