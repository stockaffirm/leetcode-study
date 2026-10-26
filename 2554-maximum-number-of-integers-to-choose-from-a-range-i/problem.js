window.PROBLEM = {
 "id": "2554",
 "title": "Maximum Number of Integers to Choose From a Range I",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Choose distinct integers from 1 to n that are not in banned so that their sum is at most maxSum; return the maximum number of integers you can choose. Example: banned [1,6,5], n=5, maxSum=6 → 2.",
 "why": "banned [1,6,5], n=5, maxSum=6: take 2 and 3 (sum 5); adding 4 would reach 9 → 2.",
 "idea": "To pick as many numbers as possible with a limited sum, pick the smallest ones. Walk 1 … n, skip banned numbers, and stop when the next number would push the sum over maxSum.",
 "input": "banned = [1,6,5], n = 5, maxSum = 6",
 "output": "2",
 "notes": [],
 "best": "To pick as many numbers as possible with a limited sum, pick the smallest ones. Walk 1 … n, skip banned numbers, and stop when the next number would push the sum over maxSum.",
 "variants": [
  {
   "name": "Take the smallest allowed numbers",
   "code": "class Solution:\n    def maxCount(self, banned, n, maxSum):\n        bad = set(banned)\n        total = count = 0\n        for v in range(1, n + 1):\n            if v in bad:\n                continue\n            if total + v > maxSum:\n                break\n            total += v\n            count += 1\n        return count",
   "time": "O(n)",
   "space": "O(b)",
   "explain": "To pick as many numbers as possible with a limited sum, pick the smallest ones. Walk 1 … n, skip banned numbers, and stop when the next number would push the sum over maxSum.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sorted banned list and pointer",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxCount(self, banned, n, maxSum):\n        bad = sorted(set(banned))\n        p = 0\n        total = count = 0\n        for v in range(1, n + 1):\n            while p < len(bad) and bad[p] < v:\n                p += 1\n            if p < len(bad) and bad[p] == v:\n                continue\n            if total + v > maxSum:\n                break\n            total += v\n            count += 1\n        return count",
   "time": "O(n + b log b)",
   "space": "O(b)",
   "explain": "Walk the numbers with a pointer into the sorted banned list instead of a set.",
   "frames": [],
   "alt": true
  }
 ]
};
