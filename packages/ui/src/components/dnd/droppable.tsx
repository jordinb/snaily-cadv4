import * as React from "react";
import { useDrop } from "react-dnd";
import { classNames } from "../../utils/classNames";

interface Props<Item> {
  onDrop(item: Item): void;
  accepts: string[];
  canDrop?(item: Item): boolean;
  children: React.ReactNode;
}

export function Droppable<Item>(props: Props<Item>) {
  const [{ isOver, canDrop: _canDrop }, drop] = useDrop({
    accept: props.accepts,
    canDrop: props.canDrop,
    drop: props.onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && _canDrop;

  return (
    <div
      className={classNames(isActive && "outline outline-2 outline-offset-[5px] rounded-sm")}
      ref={drop}
    >
      {props.children}
    </div>
  );
}
