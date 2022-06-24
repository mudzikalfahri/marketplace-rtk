import Filters from "@/components/Filter";
import MainLayout from "@/components/layouts/MainLayout";
import ProductCardSkeleton from "@/components/loading/ProductCardSkeleton";
import ProductCard from "@/components/ProductCard";
import { useLazyGetPostsQuery } from "@/core/redux/slices/posts/queries";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const [trigger, { isLoading, data, isFetching }] = useLazyGetPostsQuery();
  useEffect(() => {
    trigger(router.query.category as string);
  }, [router.query]);
  console.log(data);
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
            <div className="md:grid grid-cols-4 mt-8 gap-8">
              <Filters />

              <div className="col-span-3 mt-10 md:mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                {(isLoading || isFetching) &&
                  [...new Array(10)].map((a, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ProductCardSkeleton key={idx} />
                  ))}
                {data &&
                  !isLoading &&
                  !isFetching &&
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
