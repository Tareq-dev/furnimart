import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { register, handleSubmit} = useForm();
  const imageStorageKey = "1b2c7037c7c3024a88877acb8b2cd8fd";
  const navigate = useNavigate();
  const storeProduct = localStorage.getItem("products");
  const previousProduct = JSON.parse(storeProduct);
  const onSubmit = (data) => {
    const image = data.picture[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const productData = {
            description: data.description,
            name: data.name,
            price: data.price,
            picture: img,
          };
          const newProductData = [...previousProduct, productData];
          localStorage.setItem("products", JSON.stringify(newProductData));
          navigate('/products');
        }
      });
  };

  return (
    <div className="md:mx-20 px-5 md:my-6">
      <h1 className="text-4xl font-semibold py-8 text-center">Add Product</h1>
      <div className="flex justify-center">
        <form className="w-[350px]" onSubmit={handleSubmit(onSubmit)}>
          <input
            required
            className="border my-2 py-2 px-4 block w-80 rounded-lg"
            placeholder="Name"
            {...register("name")}
          />
          <input
            className="border my-2 py-2 px-4 block w-80 rounded-lg"
            placeholder="Price"
            {...register("price")}
          />
          <textarea
            required
            className="border my-2 py-2 px-4 block w-80 h-28 rounded-lg"
            placeholder="Description"
            {...register("description")}
          />
          <input
            required
            type="file"
            className="file-input file-input-bordered  w-full max-w-xs"
            {...register("picture")}
          />
          <input
            required
            className="border cursor-pointer bg-blue-200 w-80 py-2 rounded-lg shadow-sm my-1"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
