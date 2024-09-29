import { useQuery } from "react-query";
import { fetchBoards } from "../lib/api"
import { Board } from "../models/Board"

export const useKanban = () => {
    return useQuery<Board[]>('kanbanBoards', fetchBoards);
}