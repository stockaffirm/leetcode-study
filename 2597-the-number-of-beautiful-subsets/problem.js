window.PROBLEM = {
 "id": "2597",
 "title": "The Number of Beautiful Subsets",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "[2,4,6], k=2 → beautiful subsets: {2},{4},{6},{2,6} → 4.",
 "idea": "A subset is beautiful if no two of its numbers differ by exactly k. Backtrack over elements: include nums[i] only if neither nums[i]−k nor nums[i]+k is already chosen (tracked in a Counter). Count every non-empty subset reached.",
 "input": "nums = [2,4,6], k = 2",
 "output": "4",
 "notes": [],
 "best": "A subset is beautiful if no two of its numbers differ by exactly k. Backtrack over elements: include nums[i] only if neither nums[i]−k nor nums[i]+k is already chosen (tracked in a Counter). Count every non-empty subset reached.",
 "variants": [
  {
   "name": "Backtracking with a count table",
   "code": "class Solution:\n    def beautifulSubsets(self, nums, k):\n        chosen = Counter()\n        def go(i):\n            if i == len(nums):\n                return 1\n            res = go(i + 1)\n            x = nums[i]\n            if chosen[x - k] == 0 and chosen[x + k] == 0:\n                chosen[x] += 1\n                res += go(i + 1)\n                chosen[x] -= 1\n            return res\n        return go(0) - 1",
   "time": "O(2ⁿ)",
   "space": "O(n)",
   "explain": "A subset is beautiful if no two of its numbers differ by exactly k. Backtrack over elements: include nums[i] only if neither nums[i]−k nor nums[i]+k is already chosen (tracked in a Counter). Count every non-empty subset reached.",
   "frames": []
  }
 ]
};
