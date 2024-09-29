import { updateTaskById } from "@/app/lib/db/tasks";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { taskId: string, boardId: string } }) {
  let data = await req.json();
  const task = updateTaskById(params.boardId, params.taskId, data.status);
  return NextResponse.json({ task }, { status: 200 });
}