window.PROBLEM = {
 "id": "1399",
 "title": "Count Largest Group",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "n=13: digit sums group {1,10},{2,11},{3,12},{4,13},{5},… → four groups of size 2.",
 "idea": "Group the numbers 1…n by the sum of their digits and count how many groups have the largest size.",
 "input": "n = 13",
 "output": "4",
 "notes": [],
 "best": "Group the numbers 1…n by the sum of their digits and count how many groups have the largest size.",
 "variants": [
  {
   "name": "Group by digit sum",
   "code": "class Solution:\n    def countLargestGroup(self, n):\n        cnt = Counter(sum(map(int, str(x))) for x in range(1, n + 1))\n        top = max(cnt.values())\n        return sum(1 for v in cnt.values() if v == top)",
   "time": "O(n log n)",
   "space": "O(log n)",
   "explain": "Group the numbers 1…n by the sum of their digits and count how many groups have the largest size.",
   "frames": []
  }
 ]
};
