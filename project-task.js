/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */

  const unfinishedTodos = todos.filter((task) => !task.completed);
  
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */

  const sortedTodos = todos.sort((a, b) => a.priority - b.priority);


  /*
  🔹 Task 3: Combine Filters
  const sortedTodods = todos.sort((a, b) => a.size - b.size);
  console.log("Sorting test:, todos.sort((a, b) => a.size - b.size););
    

  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */

  const filteredAndSorted = todos
        .filter((task) => !task.completed)
        .sort((a, b) => a.priority - b.priority);

  /*



  🔹 Task 4: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */

  const allTrue = todos.map(task => { 
    return { ...task, completed: true }; 
  });
  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  console.log("Incomplete Tasks:", unfinishedTodos);
  console.log("Sorted by Priority:", sortedTodos);
  console.log("Sorted Incomplete Tasks:", filteredAndSorted);
  console.log("All Tasks Completed:", allTrue);
  
