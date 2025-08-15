import React from "react";

type Product = {
  product_id: string;
  name: string;
  price: string;
  stock: string;
  sales: string;
  image: string;
};

type Props = {
  product: Product;
};

function Product_table_item({ product }: Props) {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{product.name}</div>
            <div className="text-sm opacity-50">R${product.price}</div>
          </div>
        </div>
      </td>
      <td>
        grafico de vendas e outras coisas
        <br />
        <span className="badge badge-ghost badge-sm">Vendendo bem</span>
      </td>
      <td>1000</td>
      <td>1000</td>
      <td> acaba dia x</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
}

export default Product_table_item;
