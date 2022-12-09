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
    <div className="row mt-5">
      <div className="col-md-4 card m-auto shadow-lg">
        <form onSubmit={handleSubmit(handleChange)}>
          <div className="car-body">
            <div>
              <label className="underline" htmlFor="name">
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

          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
