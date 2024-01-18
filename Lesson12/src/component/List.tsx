import { ReactNode } from "react";
//generic T here work like a variable for TYPE
interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}
type List<T> = {
  item: T[];
};
function List<T>({ items, render }: ListProps<T>) {
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
