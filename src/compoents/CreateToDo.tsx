import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../state";

type IForm = {
  toDo: string;
};

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { handleSubmit, register, reset } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    reset({ toDo: "" });
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="Email"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
