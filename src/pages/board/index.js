import React, { useState } from "react";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";


const CARD = "card";
export const ItemTypes = {
    CARD: "card",
    LIST_ITEM: "listItem",
  };


const Card = ({ id, name, setDetail,
    setPilihan, item }) => {
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
        console.log("test drag start", id)
    }}
     ref={drag} className="card" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </button>
  );
};

const CardList = ({ id, title, items, onDrop, setDetail,
    setPilihan }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    // drop: (item, monitor) => {onDrop(item, id)},
  });

  return (
    <div className="card-list w-[300px]  px-5 py-5 bg-slate-400" ref={drop} 
    onDrop={() => {
        console.log(title,"test drop")
    }}>
      <h2 className="font-bold bg-slate-200 text-center rounded-sm">{title}</h2>
      <div className="cards ">
        {items.filter((x, i) => x.statusPesanan === title).map((item, i) => (
          <Card key={item.id} id={item.id} item={item} name={item.nama} setDetail={setDetail}
          setPilihan={setPilihan} />
        ))}
      </div>
    </div>
  );
};

const TrelloBoard = ({listOrder,  setDetail,
    setPilihan}) => {

    


  console.log(listOrder);
  const handleDrop = (cardId, listId) => {
  
  };

  const backend = window.ontouchstart === null ? TouchBackend : HTML5Backend;

  return (
    <div className="board flex w-screen h-screen py-10 px-10">
      <DndProvider  
      backend={backend}
      options={{ enableTouchEvents: true, delayTouchStart: 100 }}
      >
        {["antrian", "sedang dimasak", "sudah matang"].map((list, i) => (
          <CardList key={i} id={i} title={list}  items={listOrder} onDrop={handleDrop} setDetail={setDetail}
          setPilihan={setPilihan} />
        ))}
      </DndProvider>
    </div>
  );
};

export default TrelloBoard;
