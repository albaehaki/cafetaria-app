import React, { useState } from "react";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const CARD = "card";
export const ItemTypes = {
    CARD: "card",
    LIST_ITEM: "listItem",
  };

const cardList = [
  {
    id: 1,
    title: "Antrian",
    items: [
      { id: 1, name: "Task 1" },
      { id: 2, name: "Task 2" },
      { id: 3, name: "Task 3" },
    ],
  },
  {
    id: 2,
    title: "Lagi Dimasak",
    items: [
      { id: 4, name: "Task 4" },
      { id: 5, name: "Task 5" },
      { id: 6, name: "Task 6" },
    ],
  },
  {
    id: 3,
    title: "Sudak Siap",
    items: [
      { id: 7, name: "Task 7" },
      { id: 8, name: "Task 8" },
      { id: 9, name: "Task 9" },
    ],
  },
];

const Card = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="card" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </div>
  );
};

const CardList = ({ id, title, items, onDrop }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => onDrop(item.id, id),
  });

  return (
    <div className="card-list w-[300px] " ref={drop}>
      <h2>{title}</h2>
      <div className="cards">
        {items.map((item) => (
          <Card key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
    </div>
  );
};

const TrelloBoard = ({listOrder}) => {
  const [lists, setLists] = useState(cardList);

  console.log(listOrder);
  const handleDrop = (cardId, listId) => {
    const newList = lists.map((list) => {
      if (list.id === listId) {
        return { ...list, items: [...list.items, { id: cardId, name: `Task ${cardId}` }] };
      }
      return list;
    });
    setLists(newList);
  };

  return (
    <div className="board flex w-screen h-screen py-10 px-10">
      <DndProvider backend={HTML5Backend}>
        {lists.map((list) => (
          <CardList key={list.id} id={list.id} title={list.title} items={list.items} onDrop={handleDrop} />
        ))}
      </DndProvider>
    </div>
  );
};

export default TrelloBoard;
