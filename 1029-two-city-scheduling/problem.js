window.PROBLEM = {
 "id": "1029",
 "title": "Two City Scheduling",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
