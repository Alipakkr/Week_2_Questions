function performanceevaluation(employees) { 
  const filtered = employees.filter(e => e.tasksCompleted > 5); 
  const withPerformance = filtered.map(e => ({
    name: e.name,
    performance: e.rating > 4.5 ? "Excellent" :
                e.rating >= 3 ? "Good" : "Needs Improvement"
  })); 
  const sorted = withPerformance.sort((a, b) => {
    if (a.performance === b.performance) return 0;
    if (a.performance === "Excellent") return -1;
    if (b.performance === "Excellent") return 1;
    if (a.performance === "Good") return -1;
    return 1;
  });
  
  return sorted;
}

// Example usage
const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(performanceevaluation(employees));