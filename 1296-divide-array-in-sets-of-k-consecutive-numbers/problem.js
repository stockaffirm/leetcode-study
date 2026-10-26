window.PROBLEM = {
 "id": "1296",
 "title": "Divide Array in Sets of K Consecutive Numbers",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Given a list of numbers nums and a number k, return true if the list can be divided into sets of k CONSECUTIVE numbers (like 3,4,5), using every number exactly once. Example: [1,2,3,3,4,4,5,6], k=4 → {1,2,3,4} and {3,4,5,6} → true; [1,2,3,4], k=3 → false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Min-heap of the smallest values",
   "tag": "Alternative",
   "code": "class Solution:\n    def isPossibleDivide(self, nums, k):\n        if len(nums) % k: return False\n        cnt = Counter(nums)\n        heap = list(cnt)\n        heapify(heap)\n        while heap:\n            x = heap[0]\n            for y in range(x, x + k):\n                if cnt[y] == 0: return False\n                cnt[y] -= 1\n                if cnt[y] == 0:\n                    if y != heap[0]: return False\n                    heappop(heap)\n        return True",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Always start a run at the smallest remaining value, consuming one of each.",
   "frames": [],
   "alt": true
  }
 ]
};
