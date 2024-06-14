import { useState } from "react";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const [addTask, setAddTask] = useState({});
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setAddTask(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="Task" {...register("task2add")} />
      <select {...register("selectedOption")} defaultValue="">
        <option value="" disabled>
          Choose Your Priority
        </option>
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
        <option value="High">High </option>
      </select>
      <input type="submit" />
    </form>
  );
};

export default AddTask;
