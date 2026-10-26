window.PROBLEM = {
 "id": "1636",
 "title": "Sort Array by Increasing Frequency",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "[1,1,2,2,2,3]: 3 once, 1 twice, 2 three times → [3,1,1,2,2,2].",
 "idea": "Sort with a key of (frequency ascending, value descending) so equal-frequency values come out biggest first.",
 "input": "nums = [1,1,2,2,2,3]",
 "output": "[3, 1, 1, 2, 2, 2]",
 "notes": [],
 "best": "Sort with a key of (frequency ascending, value descending) so equal-frequency values come out biggest first.",
 "variants": [
  {
   "name": "Sort by (count, −value)",
   "code": "class Solution:\n    def frequencySort(self, nums):\n        cnt = Counter(nums)\n        return sorted(nums, key=lambda x: (cnt[x], -x))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort with a key of (frequency ascending, value descending) so equal-frequency values come out biggest first.",
   "frames": []
  }
 ]
};
