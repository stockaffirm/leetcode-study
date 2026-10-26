window.PROBLEM = {
 "id": "1526",
 "title": "Minimum Number of Increments on Subarrays to Form a Target Array",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "[1,2,3,2,1]: one operation per rise: 1 + 1 + 1 = 3.",
 "idea": "Each operation adds 1 to a contiguous range. Whenever the target rises from the previous element, the rise cannot be covered by operations already running, so it needs new operations. The answer is the first element plus all positive differences.",
 "input": "target = [1,2,3,2,1]",
 "output": "3",
 "notes": [],
 "best": "Each operation adds 1 to a contiguous range. Whenever the target rises from the previous element, the rise cannot be covered by operations already running, so it needs new operations. The answer is the first element plus all positive differences.",
 "variants": [
  {
   "name": "Sum of the rises",
   "code": "class Solution:\n    def minNumberOperations(self, target):\n        res = target[0]\n        for a, b in zip(target, target[1:]):\n            res += max(0, b - a)\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Each operation adds 1 to a contiguous range. Whenever the target rises from the previous element, the rise cannot be covered by operations already running, so it needs new operations. The answer is the first element plus all positive differences.",
   "frames": []
  }
 ]
};
