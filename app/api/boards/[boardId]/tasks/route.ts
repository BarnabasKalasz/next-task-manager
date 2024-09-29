import { getTasksByBoardId } from "@/app/lib/db/tasks";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { boardId: string } }) {
  const tasks = getTasksByBoardId(params.boardId)
  // console.log({ tasks })
  return NextResponse.json({ tasks }, { status: 200 });
}