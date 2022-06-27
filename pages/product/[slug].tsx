import MainLayout from "@/components/layouts/MainLayout";
import LoaderDetails from "@/components/loading/LoaderDetails";
import ModalAddToCart from "@/components/ModalAddToCart";
import { useAppDispatch } from "@/core/redux/hooks";
import { addItems } from "@/core/redux/slices/cart/cartSlices";
import { useGetPostByIdQuery } from "@/core/redux/slices/posts/queries";
import { setToast } from "@/core/redux/slices/ui/uiSlice";
import { ProductType } from "@/core/types/post";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Product: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { slug } = router.query;
  const [quantity, setQuantity] = useState<number>(1);
  const { data, isLoading, isFetching } = useGetPostByIdQuery(Number(slug));
  const [added, setAdded] = useState<boolean>(false);
  const changeQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };
  const addItemToCart = (item: ProductType) => {
    dispatch(addItems({ ...item, quantity }));
    dispatch(
      setToast(`${quantity} ${quantity > 1 ? "items" : "item"} added to cart`)
    );
    setAdded(true);
  };
  return (
    <MainLayout>
      {(isLoading || isFetching) && <LoaderDetails />}
      {added && <ModalAddToCart close={() => setAdded(false)} data={data} />}
      {data && (
        <section className="max-w-5xl mx-auto mt-28">
          <div className="relative px-4 sm:px-6 lg:px-8 py-8 mx-auto">
            <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
              <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
                <div className="aspect-w-1 col-span-2 aspect-h-1">
                  <img
                    alt="product"
                    className="object-cover rounded-xl"
                    src={data.image}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-4">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      alt="product"
                      className="object-cover rounded-xl"
                      src={data.image}
                    />
                  </div>

                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      alt="product"
                      className="object-cover rounded-xl"
                      src={data.image}
                    />
                  </div>
                </div>
              </div>

              <div className="sticky top-20">
                <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
                  {" "}
                  In Stock{" "}
                </strong>

                <div className="flex justify-between mt-8">
                  <div className="max-w-[35ch]">
                    <h1 className="text-2xl font-bold">{data.title}</h1>

                    <p className="mt-0.5 text-sm">Highest Rated Product</p>

                    <div className="flex mt-2 -ml-0.5">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="w-5 h-5 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-lg font-bold">${data.price}</p>
                </div>

                <summary className="block mt-4">
                  <div className="prose max-w-none group-open:hidden">
                    <p>{data.description}</p>
                  </div>
                </summary>

                <div className="mt-8">
                  <fieldset>
                    <legend className="mb-1 text-sm font-medium">Color</legend>

                    <div className="flow-root">
                      <div className="flex flex-wrap -m-0.5">
                        <label
                          htmlFor="color_tt"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="color"
                            id="color_tt"
                            className="sr-only peer"
                          />

                          <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            Texas Tea
                          </span>
                        </label>

                        <label
                          htmlFor="color_fr"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="color"
                            id="color_fr"
                            className="sr-only peer"
                          />

                          <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            Fiesta Red
                          </span>
                        </label>

                        <label
                          htmlFor="color_cb"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="color"
                            id="color_cb"
                            className="sr-only peer"
                          />

                          <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                            Cobalt Blue
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <div className="flex mt-8">
                    <input
                      onChange={changeQuantity}
                      value={quantity}
                      type="number"
                      id="quantity"
                      min="1"
                      className="w-12 px-2 py-3 text-xs text-center border-gray-200 rounded no-spinners"
                    />

                    <button
                      type="button"
                      onClick={() => addItemToCart(data)}
                      className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-gray-800 rounded hover:bg-gray-900"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default Product;
