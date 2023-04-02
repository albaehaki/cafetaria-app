import { useDrop } from "react-dnd";
export const ItemTypes = {
    CARD: "card",
    LIST_ITEM: "listItem",
  };
  import Card from "./card";

 
 
 const CardList = ({ title, items, setDetail,
    setPilihan, setIdOrder, handleDnD }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    // drop: (item, monitor) => {onDrop(item, id)},
  });

  return (
    <div className="card-list w-[300px]  px-3 py-5 bg-slate-400" ref={drop} 
    onDrop={() => {
        // console.log(title,"test drop");
        handleDnD(title)
    }}>
      <h2 className="font-bold bg-gray-300 text-center rounded-sm">{title}</h2>
      <div className="cards ">
        {items.filter((x) => x.statusPesanan === title).map((item) => (
          <Card key={item.id} id={item.id} item={item} name={item.nama} setDetail={setDetail}
          setPilihan={setPilihan} setIdOrder={setIdOrder} />
        ))}
      </div>
    </div>
  );
};

export default CardList;