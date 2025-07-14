const myWeek = [
  { day: 'Monday',    activity: 'Jogging',         category: 'physical', hoursSpent: 1,   enjoyment: 8,  timeOfDay: 'morning'   },
  { day: 'Tuesday',   activity: 'Sketching',       category: 'creative', hoursSpent: 2,   enjoyment: 7,  timeOfDay: 'evening'   },
  { day: 'Wednesday', activity: 'Team Lunch',      category: 'social',   hoursSpent: 1.5, enjoyment: 6,  timeOfDay: 'afternoon' },
  { day: 'Thursday',  activity: 'Reading',         category: 'creative', hoursSpent: 1.5, enjoyment: 9,  timeOfDay: 'morning'   },
  { day: 'Friday',    activity: 'Yoga',            category: 'physical', hoursSpent: 1,   enjoyment: 8,  timeOfDay: 'evening'   },
  { day: 'Saturday',  activity: 'Team Practice', category: 'social', hoursSpent: 2, enjoyment: 10, timeOfDay: 'afternoon'   },
  { day: 'Sunday',    activity: 'Workout',       category: 'physical', hoursSpent: 3,   enjoyment: 7,  timeOfDay: 'morning' }
];

//  Predictions
// - Highest enjoyment: Team practice will be the highest because of enjoyment 10
// - Dominant category: physical is the most dominant category because its put in 3 out of 7 days
// - Patterns by timeOfDay: mornings tend to be more physical while afternoons seem to be more social

 function totalPhysicalHours(week) {
    return week
      .filter(item => item.category === 'physical')
      .reduce((sum, item) => sum + item.hoursSpent, 0);
  }
  
  function averageEnjoymentByTimeOfDay(week) {
    const grouped = week.reduce((acc, item) => {
      const key = item.timeOfDay;
      if (!acc[key]) acc[key] = { total: 0, count: 0 };
      acc[key].total += item.enjoyment;
      acc[key].count += 1;
      return acc;
    }, {});
  
    return Object.entries(grouped).map(([timeOfDay, { total, count }]) => ({
      timeOfDay,
      averageEnjoyment: total / count
    }));
  }
  
  function mostCommonCategory(week) {
    const counts = week.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts)
      .sort(([, a], [, b]) => b - a)[0][0];
  }

// High-order function
function filterByCondition(testFn, week = myWeek) {
  return week.filter(testFn);
}
