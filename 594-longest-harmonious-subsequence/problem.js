window.PROBLEM = {
 "id": "594",
 "title": "Longest Harmonious Subsequence",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
