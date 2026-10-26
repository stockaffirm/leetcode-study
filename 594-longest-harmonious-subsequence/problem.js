window.PROBLEM = {
 "id": "594",
 "title": "Longest Harmonious Subsequence",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "A harmonious array is one where the difference between its largest and smallest value is exactly 1. Return the length of the longest harmonious SUBSEQUENCE of nums. Example: [1,3,2,2,5,2,3,7] → 5 (3,2,2,2,3).",
 "why": "[1,3,2,2,5,2,3,7]: the numbers 2 (×3) and 3 (×2) differ by exactly 1 → 5.",
 "idea": "A harmonious subsequence uses just two values that differ by 1, and the order does not matter. Count the numbers; for every x add count[x] + count[x + 1] when both exist and keep the largest.",
 "input": "nums = [1,3,2,2,5,2,3,7]",
 "output": "5",
 "notes": [],
 "best": "A harmonious subsequence uses just two values that differ by 1, and the order does not matter. Count the numbers; for every x add count[x] + count[x + 1] when both exist and keep the largest.",
 "variants": [
  {
   "name": "Count x and x + 1",
   "code": "class Solution:\n    def findLHS(self, nums):\n        cnt = Counter(nums)\n        return max((c + cnt[x + 1] for x, c in cnt.items() if x + 1 in cnt), default=0)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A harmonious subsequence uses just two values that differ by 1, and the order does not matter. Count the numbers; for every x add count[x] + count[x + 1] when both exist and keep the largest.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort and slide a window",
   "tag": "Alternative",
   "code": "class Solution:\n    def findLHS(self, nums):\n        a = sorted(nums)\n        best = left = 0\n        for right in range(len(a)):\n            while a[right] - a[left] > 1:\n                left += 1\n            if a[right] - a[left] == 1:\n                best = max(best, right - left + 1)\n        return best",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "After sorting, a window whose last and first values differ by exactly 1 is a harmonious subsequence.",
   "frames": [],
   "alt": true
  }
 ]
};
