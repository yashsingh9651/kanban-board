export const cardsData = [
    {
      id: Date.now() + Math.random() * 50,
      title: "backlog",
      tasks: [
        {
          id: Date.now() + Math.random(),
          title: "Task-1 of backlog Card",
          desc:"Description of Task-1 of Backlog Card",
          urgent:'urgent',
        },
        {
          id: Date.now() + Math.random(),
          title: "Task-2 of backlog Card",
          desc:"Description of Task-2 of Backlog Card",
          urgent:''
        }
      ],
    },
    {
      id: Date.now() + Math.random() * 50,
      title: "todo",
      tasks: [
        {
          id: Date.now() + Math.random(),
          title: "Task-1 of Todo Card",
          desc:"Description of Task-1 of Todo Card",
          urgent:'urgent'
        },
        {
          id: Date.now() + Math.random(),
          title: "Task-2 of Todo Card",
          desc:"Description of Task-2 of Todo Card",
          urgent:''
        },
        {
          id: Date.now() + Math.random(),
          title: "Task-3 of Todo Card",
          desc:"Description of Task-3 of Todo Card",
          urgent:'urgent'
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 50,
      title: "In progress",
      tasks: [
        {
          id: Date.now() + Math.random(),
          title: "Task-1 of In Progress Card",
          desc:"Description of Task-1 of In Progress Card",
          urgent:''
        }
      ],
    },
    {
      id: Date.now() + Math.random() * 50,
      title: "completed",
      tasks: [
        {
          id: Date.now() + Math.random(),
          title: "Task-1 of Completed Card",
          desc:"Description of Task-1 of Completed Card",
          urgent:'urgent'
        },
        {
          id: Date.now() + Math.random(),
          title: "Task-2 of Completed Card",
          desc:"Description of Task-2 of Completed Card",
          urgent:''
        }
      ],
    },
  ]