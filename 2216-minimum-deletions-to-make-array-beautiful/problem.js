window.PROBLEM = {
 "id": "2216",
 "title": "Minimum Deletions to Make Array Beautiful",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[1,1,2,3,5] → delete one of the first 1s → [1,2,3,5] → 1.",
 "idea": "Beautiful means even length and nums[2i] != nums[2i+1]. Build the result greedily: keep a counter of the kept length; when the kept length is even (an even index is about to be written) and the next number equals the previous kept one, delete it. If the final length is odd, delete one more.",
 "input": "nums = [1,1,2,3,5]",
 "output": "1",
 "notes": [],
 "best": "Beautiful means even length and nums[2i] != nums[2i+1]. Build the result greedily: keep a counter of the kept length; when the kept length is even (an even index is about to be written) and the next number equals the previous kept one, delete it. If the final length is odd, delete one more.",
 "variants": [
  {
   "name": "Greedy build, delete a duplicate at an even slot",
   "code": "class Solution:\n    def minDeletion(self, nums):\n        deletions = 0\n        for i, x in enumerate(nums):\n            pos = i - deletions\n            if pos % 2 == 1 and nums[i - 1] == x:\n                deletions += 1\n        if (len(nums) - deletions) % 2:\n            deletions += 1\n        return deletions",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Beautiful means even length and nums[2i] != nums[2i+1]. Build the result greedily: keep a counter of the kept length; when the kept length is even (an even index is about to be written) and the next number equals the previous kept one, delete it. If the final length is odd, delete one more.",
   "frames": []
  }
 ]
};
