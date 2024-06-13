import React from "react";
import { MdDelete } from "react-icons/md";

const ColumnContainer = (props) => {
  const { col, deleteColumn } = props;
  const { id, title } = col;
  return (
    <div className="bg-mainBgColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col text-white ">
      {/* Header */}
      <div className="bg-columnBgColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBgColor border-4 flex items-center justify-between">
        0<p>{title}</p>
        <button
          onClick={() => deleteColumn(id)}
          className="stroke-gray-500 hover:stroke-white hover:bg-columnBgColor rounded px-1 py-2"
        >
          <MdDelete />
        </button>
      </div>
      {/* Content */}
      {/* Footer */}
    </div>
  );
};

export default ColumnContainer;
