import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import ColumnContainer from "./ColumnContainer";
import { useAuth } from "../../../Hooks/useAuth";
import Loading from "../../../Shared/Loading";

const Kanban = () => {
  const { loading } = useAuth();
  const [column, setColumn] = useState([]);
  console.log(column);
  if (loading) {
    return <Loading></Loading>;
  }
  const addColumn = () => {
    const generateId = () => {
      return Math.floor(Math.random() * 1001);
    };

    const columnToAdd = {
      id: generateId(),
      title: `Column ${column.length + 10}`,
    };

    setColumn([...column, columnToAdd]);
  };

  const deleteColumn = (id) => {
    const filteredColumn = column.filter((col) => col.id !== id);
    setColumn(filteredColumn);
  };

  return (
    <div className="m-auto flex min-h-screen w-full items-center  overflow-x-auto overflow-y-hidden px-[40px] ">
      {/* Column container */}
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {column.map((col) => {
            return (
              <ColumnContainer
                col={col}
                key={col.id}
                deleteColumn={deleteColumn}
              ></ColumnContainer>
            );
          })}
          <button
            onClick={addColumn}
            className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg btn btn-accent p-4 ring-black-500 hover:ring-2"
          >
            <FiPlusCircle />
            Add Column
          </button>
        </div>
      </div>
      {/* Add Column   */}
    </div>
  );
};

export default Kanban;
