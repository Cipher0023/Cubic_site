"use client";
import React, { useEffect, useState } from "react";
import Product_table_item from "./Product_table_item/Product_table_item";

type Product = {
  product_id: string;
  name: string;
  price: string;
  stock: string;
  sales: string;
  image: string;
};

function Product_table() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://localhost:3002/private/lstPrd", {
          credentials: "include",
        });
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Erro ao buscar produtos", err);
      }
    };
    fetchProducts();
  });

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>venda</th>
            <th>Produto</th>
            <th>Informações gerais</th>
            <th>Estoque</th>
            <th>Nº de vendas</th>
            <th>Estoque</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product_table_item key={product.product_id} product={product} />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Product_table;
