window.PROBLEM = {
 "id": "3480",
 "title": "Maximize Subarrays After Removing One Conflicting Pair",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
