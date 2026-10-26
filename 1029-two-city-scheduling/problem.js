window.PROBLEM = {
 "id": "1029",
 "title": "Two City Scheduling",
 "level": "Medium",
 "topic": "Greedy",
 "question": "2n people each have a cost to fly to city A and to city B; exactly n must go to each city. Return the minimum total cost. Example: [[10,20],[30,200],[400,50],[30,20]] → 110.",
 "why": "costs [[10,20],[30,200],[400,50],[30,20]]: send the first two to A and the last two to B → 110.",
 "idea": "Half the people go to each city. Start by sending everyone to A; switching person i to B changes the cost by costB − costA. Sort by that difference and send the n people with the smallest difference (biggest saving) to B.",
 "input": "costs = [[10,20],[30,200],[400,50],[30,20]]",
 "output": "110",
 "notes": [],
 "best": "Half the people go to each city. Start by sending everyone to A; switching person i to B changes the cost by costB − costA. Sort by that difference and send the n people with the smallest difference (biggest saving) to B.",
 "variants": [
  {
   "name": "Send the people with the biggest saving to A",
   "code": "class Solution:\n    def twoCitySchedCost(self, costs):\n        costs = sorted(costs, key=lambda c: c[0] - c[1])\n        n = len(costs) // 2\n        return sum(c[0] for c in costs[:n]) + sum(c[1] for c in costs[n:])",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Half the people go to each city. Start by sending everyone to A; switching person i to B changes the cost by costB − costA. Sort by that difference and send the n people with the smallest difference (biggest saving) to B.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort by cost of A minus cost of B (index form)",
   "tag": "Alternative",
   "code": "class Solution:\n    def twoCitySchedCost(self, costs):\n        order = sorted(range(len(costs)), key=lambda i: costs[i][0] - costs[i][1])\n        half = len(costs) // 2\n        return sum(costs[i][0] for i in order[:half]) + sum(costs[i][1] for i in order[half:])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort the indices by the saving of choosing A and assign the best half to A.",
   "frames": [],
   "alt": true
  }
 ]
};
