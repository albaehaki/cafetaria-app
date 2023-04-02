import {useDrag } from "react-dnd";
export const ItemTypes = {
    CARD: "card",
    LIST_ITEM: "listItem",
  };


const Card = ({ id, name, setDetail,
    setPilihan, item, setIdOrder }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    // item: { index },
    collect: (monitor) => ({

      isDragging: !!monitor.isDragging(),
    }),
    // collect: (monitor) => ({
    //     isDragging: monitor.isDragging(),
    //   }),
  });

  return (
    <button 
    onClick={() => {
        setDetail(item);
        setPilihan("Info Order");
    }}
  
    onDragStart={() => {
        // console.log("test drag start", id)
        setIdOrder(id)
    }}
     ref={drag} className="card bg-white w-full" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </button>
  );
};

export default Card;