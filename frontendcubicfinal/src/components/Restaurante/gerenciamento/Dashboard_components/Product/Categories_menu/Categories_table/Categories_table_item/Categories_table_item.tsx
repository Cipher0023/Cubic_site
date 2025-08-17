import React from "react";

type Category = {
  name: string;
  description: string;
  added_by: string;
};

type Props = {
  category: Category;
};

export default function Categories_table_item({ category }: Props) {
  return (
    <tr>
      <th>1</th>
      <td>{category.name}</td>
      <td>{category.description}</td>
      <td>{category.added_by}</td>
    </tr>
  );
}
