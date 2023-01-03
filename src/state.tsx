import { atom } from "recoil";

export type IToDo = {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
};

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
