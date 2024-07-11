import { useAuth } from "../../Hooks/useAuth";
import Loading from "../../Shared/Loading";
import Kanban from "./Experiment/Kanban";

const Tasks = () => {
  return (
    <div className="text-black bg-tealg-400">
      <h1 className="text-2xl text-center font-bold">Tasks</h1>
      <Kanban></Kanban>
    </div>
  );
};

export default Tasks;
