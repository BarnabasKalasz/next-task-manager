import { createBoard, getBoards } from '@/app/lib/db/boards';
import { NextResponse } from "next/server";



export async function GET() {
  try {
    const boards = await getBoards()
    return NextResponse.json({ boards }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch boards' }, { status: 500 });
  }
}

export async function POST(req: Request) { // This is just a test right now, with hardcoded board to create a layer down. TBD: do the actual logic
  let data = await req.json();
  try {
    const board = await createBoard(data)
    return NextResponse.json({ board }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create board' }, { status: 500 });
  }
}