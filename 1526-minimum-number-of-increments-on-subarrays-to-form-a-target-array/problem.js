window.PROBLEM = {
 "id": "1526",
 "title": "Minimum Number of Increments on Subarrays to Form a Target Array",
 "level": "Hard",
 "topic": "Greedy",
 "question": "Start from an array of zeros. In one operation choose any subarray and add 1 to every element. Return the minimum operations to reach the given target. Example: [1,2,3,2,1] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Divide and conquer on the minimum",
   "tag": "Alternative",
   "code": "class Solution:\n    def minNumberOperations(self, target):\n        def go(l, r, base):\n            if l > r:\n                return 0\n            m = min(target[l:r + 1])\n            res = m - base\n            i = l\n            for j in range(l, r + 2):\n                if j > r or target[j] == m:\n                    res += go(i, j - 1, m)\n                    i = j + 1\n            return res\n        return go(0, len(target) - 1, 0)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Lift the whole segment to its minimum with min − base operations, then solve the pieces between the minimum positions.",
   "frames": [],
   "alt": true
  }
 ]
};
