window.PROBLEM = {
 "id": "1296",
 "title": "Divide Array in Sets of K Consecutive Numbers",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "Can the numbers be split into groups of k consecutive values (like 3,4,5,6 for k=4)?",
 "idea": "Count the numbers. Take the smallest remaining value x: it must start a run x, x+1, …, x+k−1, so remove one of each (and as many runs as x's remain). If any needed number is missing, it fails.",
 "input": "[1,2,3,3,4,4,5,6], k=4",
 "output": "True",
 "notes": [],
 "best": "Count the numbers. Take the smallest remaining value x: it must start a run x, x+1, …, x+k−1, so remove one of each (and as many runs as x's remain). If any needed number is missing, it fails.",
 "variants": [
  {
   "name": "Smallest first, build runs",
   "code": "class Solution:\n    def isPossibleDivide(self, nums, k):\n        if len(nums) % k: return False\n        cnt = Counter(nums)\n        for x in sorted(cnt):\n            c = cnt[x]\n            if c:\n                for y in range(x, x + k):\n                    if cnt[y] < c: return False\n                    cnt[y] -= c\n        return True",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Count the numbers. Take the smallest remaining value x: it must start a run x, x+1, …, x+k−1, so remove one of each (and as many runs as x's remain). If any needed number is missing, it fails.",
   "frames": []
  }
 ]
};
