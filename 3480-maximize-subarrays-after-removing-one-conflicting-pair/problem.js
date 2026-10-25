window.PROBLEM = {
 "id": "3480",
 "title": "Maximize Subarrays After Removing One Conflicting Pair",
 "level": "Hard",
 "topic": "Greedy",
 "question": "The numbers 1..n are written in order. Some pairs [a, b] are 'conflicting': a subarray (a run of consecutive numbers) must not contain both a and b. You must delete exactly one pair from the list. Count the subarrays that contain no remaining pair, and return the biggest possible count. Example: n=4, pairs [[2,3],[1,4]] → 9.",
 "why": "Numbers 1..n sit in order. Some pairs [a, b] are 'conflicting': a subarray may not contain both. You must delete exactly one pair; count the subarrays that contain no remaining pair, as large as possible.",
 "idea": "For a right end r, the valid left ends are those after the biggest 'left number' of any pair that already fits inside [.., r]. Track the top two such left numbers. Deleting the pair that owns the top one lifts every such r from top1 to top2 — add up those gains per pair and take the best.",
 "input": "n=4, pairs [[2,3],[1,4]]",
 "output": "9",
 "notes": [],
 "best": "For a right end r, the valid left ends are those after the biggest 'left number' of any pair that already fits inside [.., r]. Track the top two such left numbers. Deleting the pair that owns the top one lifts every such r from top1 to top2 — add up those gains per pair and take the best.",
 "variants": [
  {
   "name": "Best two left bounds per right end",
   "code": "class Solution:\n    def maxSubarrays(self, n, conflictingPairs):\n        groups = [[] for _ in range(n + 1)]\n        for a, b in conflictingPairs:\n            if a > b: a, b = b, a\n            groups[b].append(a)\n        total = 0\n        gain = [0] * (n + 1)\n        top1 = top2 = 0\n        for r in range(1, n + 1):\n            for a in groups[r]:\n                if a > top1: top1, top2 = a, top1\n                elif a > top2: top2 = a\n            total += r - top1\n            gain[top1] += top1 - top2\n        return total + max(gain)",
   "time": "O(n + p)",
   "space": "O(n)",
   "explain": "For a right end r, the valid left ends are those after the biggest 'left number' of any pair that already fits inside [.., r]. Track the top two such left numbers. Deleting the pair that owns the top one lifts every such r from top1 to top2 — add up those gains per pair and take the best.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try removing every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxSubarrays(self, n, conflictingPairs):\n        best = 0\n        for skip in range(len(conflictingPairs)):\n            pairs = [sorted(p) for i, p in enumerate(conflictingPairs) if i != skip]\n            total = 0\n            for r in range(1, n + 1):\n                left = max([a for a, b in pairs if b <= r], default=0)\n                total += r - left\n            best = max(best, total)\n        return best",
   "time": "O(p·n·p)",
   "space": "O(n)",
   "explain": "For each pair to delete, count the valid subarrays with a sweep over the right end.",
   "frames": [],
   "alt": true
  }
 ]
};
