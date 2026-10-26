window.PROBLEM = {
 "id": "3627",
 "title": "Maximum Median Sum of Subsequences of Size 3",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[2,1,3,2,1,3] sorted [1,1,2,2,3,3]: medians 3 and 2 → 5.",
 "idea": "Each step removes three numbers and scores their median. The best step takes the two largest numbers plus the smallest: the median is the second largest. Sort, then repeatedly take the second largest of what remains, jumping two positions each time, for n/3 steps.",
 "input": "nums = [2,1,3,2,1,3]",
 "output": "5",
 "notes": [],
 "best": "Each step removes three numbers and scores their median. The best step takes the two largest numbers plus the smallest: the median is the second largest. Sort, then repeatedly take the second largest of what remains, jumping two positions each time, for n/3 steps.",
 "variants": [
  {
   "name": "Take the second largest, then every second one",
   "code": "class Solution:\n    def maximumMedianSum(self, nums):\n        nums.sort()\n        steps = len(nums) // 3\n        return sum(nums[-2 - 2 * i] for i in range(steps))",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Each step removes three numbers and scores their median. The best step takes the two largest numbers plus the smallest: the median is the second largest. Sort, then repeatedly take the second largest of what remains, jumping two positions each time, for n/3 steps.",
   "frames": []
  }
 ]
};
