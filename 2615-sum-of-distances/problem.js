window.PROBLEM = {
 "id": "2615",
 "title": "Sum of Distances",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[1,3,1,1,2] → arr[0] = |0−2| + |0−3| = 5, arr[2] = 2 + 1 = 3, … → [5,0,3,4,0].",
 "idea": "Group the indices of equal values. For the sorted positions p of one value, the distance sum for p[j] is (p[j]·j − sum of earlier positions) + (sum of later positions − p[j]·(count − j − 1)). Prefix sums of the positions give this in O(1) per index.",
 "input": "nums = [1,3,1,1,2]",
 "output": "[5, 0, 3, 4, 0]",
 "notes": [],
 "best": "Group the indices of equal values. For the sorted positions p of one value, the distance sum for p[j] is (p[j]·j − sum of earlier positions) + (sum of later positions − p[j]·(count − j − 1)). Prefix sums of the positions give this in O(1) per index.",
 "variants": [
  {
   "name": "Per value: prefix sums over its positions",
   "code": "class Solution:\n    def distance(self, nums):\n        pos = defaultdict(list)\n        for i, x in enumerate(nums):\n            pos[x].append(i)\n        res = [0] * len(nums)\n        for p in pos.values():\n            total = sum(p)\n            left = 0\n            m = len(p)\n            for j, i in enumerate(p):\n                res[i] = i * j - left + (total - left - i) - i * (m - j - 1)\n                left += i\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Group the indices of equal values. For the sorted positions p of one value, the distance sum for p[j] is (p[j]·j − sum of earlier positions) + (sum of later positions − p[j]·(count − j − 1)). Prefix sums of the positions give this in O(1) per index.",
   "frames": []
  }
 ]
};
