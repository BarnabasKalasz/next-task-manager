import { getBoards } from '@/app/lib/db/boards';
import { NextResponse } from "next/server";



export async function GET() {
  try {
    const boards = await getBoards()
    return NextResponse.json({ boards }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch boards' }, { status: 500 });
  }
}