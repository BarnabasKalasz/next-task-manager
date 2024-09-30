import { createTask } from "@/app/lib/db/tasks";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params: {boardId} }: { params: { boardId: string } }) { // This is just a test right now, with hardcoded board to create a layer down. TBD: do the actual logic
  let task = await req.json();
  try {
    const board = await createTask(task, boardId)
    return NextResponse.json({ board }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create board' }, { status: 500 });
  }
}