import { connectToDatabase } from "./app/lib/db/mongodb";

async function initDatabase() {
  const db = await connectToDatabase();

  try {
    const boardsCollection = db.collection('boards');
    const tasksCollection = db.collection('tasks');

    const existingBoards = await boardsCollection.countDocuments();
    if (existingBoards === 0) {
      await boardsCollection.insertMany([
        {
          id: '111',
          name: 'To Do List',
          columns: ['To-Do', 'Done']

        },
        {
          id: '222',
          name: 'Development Kanban',
          columns: ['To-Do', 'In Progress', 'In QA', 'Done'],
        },
        {
          id: '333',
          name: 'Exam Study',
          columns: ['To-Study', 'Studying', 'Knowledge-Checking', 'Revising', 'Know-By-Heart'],
        },
      ]);
    }
    const existingTasks = await tasksCollection.countDocuments();
    if (existingTasks === 0) {
      await tasksCollection.insertMany([
        {
          id: 'task1',
          title: 'Design the UI',
          description: 'Create mockups for the main dashboard and tasks view',
          creator: 'Alice',
          assignedTo: 'Bob',
          status: 'To-Do',
          boardId: '222',
        },
        {
          id: 'task2',
          title: 'Implement Drag and Drop',
          description: 'Enable drag and drop functionality for tasks in the Kanban board',
          creator: 'Alice',
          assignedTo: 'Charlie',
          status: 'In Progress',
          boardId: '222',
        },
        {
          id: 'task3',
          title: 'Deploy to Production',
          description: 'Prepare the app for production and deploy it',
          creator: 'Bob',
          assignedTo: 'Alice',
          status: 'Done',
          boardId: '222',
        },
        {
          id: 'task11',
          title: 'Go Shopping',
          description: 'Should go shopping for groceries',
          creator: 'Alice',
          assignedTo: 'Bob',
          status: 'To-Do',
          boardId: '111',
        },
        {
          id: 'task22',
          title: 'Pressure wash porch',
          description: 'Should pressure wash the porch, removing the mud from it',
          creator: 'Alice',
          assignedTo: 'Charlie',
          status: 'To-Do',
          boardId: '111',
        },
        {
          id: 'task33',
          title: 'Do laundry',
          description: 'Wash all clothing, separated by color and fabric, dry them, then iron them',
          creator: 'Bob',
          assignedTo: 'Alice',
          status: 'Done',
          boardId: '111',
        },
        {
          id: 'task111',
          title: 'History of Haiti',
          description: 'Find out the ridiculous history of the small island nation of Haiti',
          creator: 'Alice',
          assignedTo: 'Bob',
          status: 'To-Study',
          boardId: '333',
        },
        {
          id: 'task222',
          title: 'Life story of Raputin',
          description: 'Immerse yourself in the srory of a miracle working cleric almost felling a nation by seducing the queen',
          creator: 'Alice',
          assignedTo: 'Charlie',
          status: 'Studying',
          boardId: '333',
        },
        {
          id: 'task333',
          title: 'The great Emu war',
          description: 'Find out how a group of birds won over the nation of Australia in a war against them',
          creator: 'Bob',
          assignedTo: 'Alice',
          status: 'Know-By-Heart',
          boardId: '333',
        },
        {
          id: 'task5',
          title: 'Cat and Black plague means you are a witch',
          description: 'Learn the interesting history on how having cats helped avoid the plague only to expose you as a witch',
          creator: 'Alice',
          assignedTo: 'Bob',
          status: 'To-Study',
          boardId: '333',
        },
        {
          id: 'task4',
          title: 'The tagic fate of Chrysippus',
          description: 'Study and find out why it might be bad for you to laugh at your own jokes',
          creator: 'Alice',
          assignedTo: 'Charlie',
          status: 'Revising',
          boardId: '333',
        },
        {
          id: 'task6',
          title: 'Victorian Gent, Old French Pirate, Disgraced Samurai, Wild West Gunslinger',
          description: 'Study the era where all these people existed at the same time',
          creator: 'Bob',
          assignedTo: 'Alice',
          status: 'Knowledge-Checking',
          boardId: '333',
        }
      ])
    }

    console.log('Database initialized with sample data!');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Call the initDatabase function to run it
initDatabase().catch(console.error);