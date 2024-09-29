import KanbanBoard from '@/app/components/KanbanBoard';
import QueryWrapper from '@/app/components/QueryWrapper';
import { getBoardById } from '@/app/lib/db/boards';
import { notFound } from 'next/navigation';

interface BoardPageProps {
  params: {
    boardId: string;
  };
}

export default async function BoardPage({ params }: BoardPageProps) {
  const { boardId } = params;
  const board = await getBoardById(boardId)

  if (!board) {
    return notFound(); // 404 if the board doesnt exist
  }
  return (
    <div>
      <h1>{board.name}</h1>
      <QueryWrapper>
        <KanbanBoard board={board} />
      </QueryWrapper>
    </div>
  );
}