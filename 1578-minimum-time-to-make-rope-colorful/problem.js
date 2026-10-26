window.PROBLEM = {
 "id": "1578",
 "title": "Minimum Time to Make Rope Colorful",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "colors 'abaac', times [1,2,3,4,5]: in 'aa' remove the cheaper one (3) → 3.",
 "idea": "Neighbouring balloons of the same colour are a problem. In every run of equal colours keep the balloon with the largest removal time and remove all the others; the cost is the run's sum minus its maximum.",
 "input": "colors = \"abaac\", neededTime = [1,2,3,4,5]",
 "output": "3",
 "notes": [],
 "best": "Neighbouring balloons of the same colour are a problem. In every run of equal colours keep the balloon with the largest removal time and remove all the others; the cost is the run's sum minus its maximum.",
 "variants": [
  {
   "name": "In each same-colour run keep the most expensive balloon",
   "code": "class Solution:\n    def minCost(self, colors, neededTime):\n        total = 0\n        i = 0\n        n = len(colors)\n        while i < n:\n            j = i\n            run_sum = run_max = 0\n            while j < n and colors[j] == colors[i]:\n                run_sum += neededTime[j]\n                run_max = max(run_max, neededTime[j])\n                j += 1\n            total += run_sum - run_max\n            i = j\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Neighbouring balloons of the same colour are a problem. In every run of equal colours keep the balloon with the largest removal time and remove all the others; the cost is the run's sum minus its maximum.",
   "frames": []
  }
 ]
};
