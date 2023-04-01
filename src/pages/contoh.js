import { useState } from 'react';

export default function Item({ name }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>{name}</p>
      <div>
        <button onClick={handleSubtract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      {/* <App/> */}
    </div>
  );
}

// export function App() {
//   const items = [
//     { name: 'Item 1', count: 0 },
//     { name: 'Item 2', count: 0 },
//     { name: 'Item 3', count: 0 },
//   ];

//   const handleAdd = (index) => {
//     const updatedItems = [...items];
//     updatedItems[index].count += 1;
//     setItems(updatedItems);
//   };

//   const handleSubtract = (index) => {
//     if (items[index].count > 0) {
//       const updatedItems = [...items];
//       updatedItems[index].count -= 1;
//       setItems(updatedItems);
//     }
//   };

//   return (
//     <div>
//       {items.map((item, index) => (
//         <Item
//           key={index}
//           name={item.name}
//           count={item.count}
//           onAdd={() => handleAdd(index)}
//           onSubtract={() => handleSubtract(index)}
//         />
//       ))}
//     </div>
//   );
// }
