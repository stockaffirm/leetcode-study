window.PROBLEM = {
 "id": "1049",
 "title": "Last Stone Weight II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Repeatedly smash two stones: equal ones vanish, otherwise the heavier loses the lighter's weight. What is the smallest possible weight of the last stone (or 0)?",
 "idea": "The final stone is the difference of two groups of stones (those with + and those with −). So split the stones into two subsets with sums as close as possible: find the reachable subset sum closest to half of the total (bitset knapsack).",
 "input": "[2,7,4,1,8,1]",
 "output": "1",
 "notes": [],
 "best": "The final stone is the difference of two groups of stones (those with + and those with −). So split the stones into two subsets with sums as close as possible: find the reachable subset sum closest to half of the total (bitset knapsack).",
 "variants": [
  {
   "name": "Split into two nearly equal sums",
   "code": "class Solution:\n    def lastStoneWeightII(self, stones):\n        total = sum(stones)\n        bits = 1\n        for s in stones: bits |= bits << s\n        for j in range(total // 2, -1, -1):\n            if bits >> j & 1: return total - 2 * j",
   "time": "O(n·S)",
   "space": "O(S)",
   "explain": "The final stone is the difference of two groups of stones (those with + and those with −). So split the stones into two subsets with sums as close as possible: find the reachable subset sum closest to half of the total (bitset knapsack).",
   "frames": []
  }
 ]
};
