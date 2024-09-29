import { getTasksByBoardId, updateTaskById } from "@/app/lib/db/tasks";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { boardId: string } }) {
  const tasks = await getTasksByBoardId(params.boardId)
  return NextResponse.json(tasks, { status: 200 });
}
