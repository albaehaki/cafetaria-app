import React, { useState } from "react";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";


import { usePesanan } from "@/hooks/usePesanan";

import CardList from "@/components/cardlist";

const TrelloBoard = ({listOrder,  setDetail,
    setPilihan}) => {
        const {updateStatus} = usePesanan()
        const [idOrder, setIdOrder] = useState("");
  const handleDnD = (data) => {
    updateStatus(data, idOrder)
  }

  const backend = window.ontouchstart === null ? TouchBackend : HTML5Backend;

  return (
    <div className="board flex w-screen h-full py-5 px-5 ">
      <DndProvider  
      backend={backend}
      options={{ enableTouchEvents: true, delayTouchStart: 100 }}
      >
        {["antrian", "sedang dimasak", "sudah matang"].map((list, i) => (
          <CardList key={i} id={i} title={list}  items={listOrder}  setDetail={setDetail}
          setPilihan={setPilihan} setIdOrder={setIdOrder} handleDnD={handleDnD}/>
        ))}
      </DndProvider>
    </div>
  );
};

export default TrelloBoard;
