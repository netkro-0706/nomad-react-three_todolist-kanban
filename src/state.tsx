import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "f", "g"],
    doing: ["c", "d", "e"],
    done: ["h"],
    "Do Later": ["i", "j"],
  },
});
