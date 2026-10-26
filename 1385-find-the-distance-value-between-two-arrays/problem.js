window.PROBLEM = {
 "id": "1385",
 "title": "Find the Distance Value Between Two Arrays",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "",
 "why": "Count the numbers a in arr1 for which no number b of arr2 satisfies |a − b| ≤ d.",
 "idea": "Sort arr2. For each a, the nearest numbers of arr2 are found with bisect; a counts only if both neighbours are farther than d.",
 "input": "[4,5,8], [10,9,1,8], d=2",
 "output": "2",
 "notes": [],
 "best": "Sort arr2. For each a, the nearest numbers of arr2 are found with bisect; a counts only if both neighbours are farther than d.",
 "variants": [
  {
   "name": "Sort + bisect",
   "code": "class Solution:\n    def findTheDistanceValue(self, arr1, arr2, d):\n        arr2 = sorted(arr2)\n        count = 0\n        for a in arr1:\n            i = bisect_left(arr2, a)\n            near = []\n            if i < len(arr2): near.append(arr2[i])\n            if i > 0: near.append(arr2[i - 1])\n            if all(abs(a - b) > d for b in near): count += 1\n        return count",
   "time": "O((n+m) log m)",
   "space": "O(1)",
   "explain": "Sort arr2. For each a, the nearest numbers of arr2 are found with bisect; a counts only if both neighbours are farther than d.",
   "frames": []
  }
 ]
};
