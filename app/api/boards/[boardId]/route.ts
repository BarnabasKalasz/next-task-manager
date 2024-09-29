import { getBoardById } from "@/app/lib/db/boards";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { boardId: string } }) {
  const board = getBoardById(params.boardId)
  return NextResponse.json({ board }, { status: 200 });
}