window.PROBLEM = {
 "id": "2593",
 "title": "Find Score of an Array After Marking All Elements",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "[2,1,3,4,5,2]: take 1 (marks its neighbours), then the last 2, then 4 → 1 + 2 + 4 = 7.",
 "idea": "Sort indices by (value, index). Take the smallest unmarked element, add its value to the score and mark it together with its two neighbours. Continue until all are marked.",
 "input": "nums = [2,1,3,4,5,2]",
 "output": "7",
 "notes": [],
 "best": "Sort indices by (value, index). Take the smallest unmarked element, add its value to the score and mark it together with its two neighbours. Continue until all are marked.",
 "variants": [
  {
   "name": "Process values from smallest, mark neighbours",
   "code": "class Solution:\n    def findScore(self, nums):\n        n = len(nums)\n        marked = [False] * n\n        score = 0\n        for v, i in sorted((v, i) for i, v in enumerate(nums)):\n            if not marked[i]:\n                score += v\n                marked[i] = True\n                if i > 0:\n                    marked[i - 1] = True\n                if i + 1 < n:\n                    marked[i + 1] = True\n        return score",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort indices by (value, index). Take the smallest unmarked element, add its value to the score and mark it together with its two neighbours. Continue until all are marked.",
   "frames": []
  }
 ]
};
