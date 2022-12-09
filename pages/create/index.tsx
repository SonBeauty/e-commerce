import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const create = gql`
  mutation createProduct($data: ProductInput!) {
    createProduct(data: $data) {
      data {
        attributes {
          name
          price
        }
      }
    }
  }
`;
interface Event {
  name: string;
  price: number;
}

const NewProduct = () => {
  const router = useRouter();
  const [createProduct] = useMutation(create);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleChange = async (e: any) => {
    console.log(e);
    await createProduct({
      variables: {
        data: {
          name: `${e.name}`,
          price: e.price,
        },
      },
    });
    // router.push("/");
  };

  return (
    <div className="container mt-5">
      <div>
        <form className="" onSubmit={handleSubmit(handleChange)}>
          <div className="car-body">
            <div>
              <label className="form-group" htmlFor="name">
                name
              </label>
              <input className="form-control" {...register("name")} />
            </div>
            <div>
              <label className="underline" htmlFor="price">
                price
              </label>
              <input
                type="number"
                className="form-control"
                {...register("price")}
              />
            </div>
          </div>

          <div className="mt-3">
            <input type="submit" className="btn btn-success" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
