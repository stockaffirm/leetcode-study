window.PROBLEM = {
 "id": "2592",
 "title": "Maximize Greatness of an Array",
 "level": "Medium",
 "topic": "Greedy",
 "question": "You are given a list nums. You may rearrange it into any new order perm. The 'greatness' of perm is the number of positions i where perm[i] is strictly greater than nums[i]. Return the largest greatness you can achieve. Example: [1,3,5,2,1,3,1] → one best arrangement is [2,5,1,3,3,1,1], which beats the original at 4 positions → 4.",
 "why": "Rearrange the list into a new list perm. 'Greatness' is the number of positions where perm[i] > nums[i]. Make it as big as possible.",
 "idea": "Sort. Walk through the values in order and give each position the next strictly larger value, using a second pointer that only moves when it finds one.",
 "input": "[1, 3, 5, 2, 1, 3, 1]",
 "output": "4",
 "notes": [],
 "best": "Sort. Walk through the values in order and give each position the next strictly larger value, using a second pointer that only moves when it finds one.",
 "variants": [
  {
   "name": "Sort + two pointers",
   "code": "class Solution:\n    def maximizeGreatness(self, nums):\n        nums = sorted(nums)\n        i = 0\n        for x in nums:\n            if x > nums[i]: i += 1\n        return i",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort. Walk through the values in order and give each position the next strictly larger value, using a second pointer that only moves when it finds one.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "n − highest frequency",
   "tag": "Pythonic",
   "code": "class Solution:\n    def maximizeGreatness(self, nums):\n        return len(nums) - max(Counter(nums).values())",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Equal values can never beat each other, so the most repeated value limits the answer: greatness = n − (largest count).",
   "frames": [],
   "alt": true
  }
 ]
};
