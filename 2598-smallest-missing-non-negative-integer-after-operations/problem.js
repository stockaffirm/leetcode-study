window.PROBLEM = {
 "id": "2598",
 "title": "Smallest Missing Non-negative Integer After Operations",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "You are given a list nums and a number value. In one operation you may add value to, or subtract value from, any element (as often as you like; elements may become negative). The MEX of a list is its smallest non-negative integer that is not in it. Return the largest MEX you can reach. Example: [1,-10,7,13,6,8], value 5 → the remainders mod 5 are 1,0,2,3,1,3, so 0,1,2,3 can be made but not 4 → 4.",
 "why": "You may add or subtract `value` from any element any number of times. What is the largest MEX (smallest missing non-negative integer) you can reach?",
 "idea": "Adding/subtracting value keeps a number's remainder mod value. So each number can become any non-negative number with the same remainder. Count numbers per remainder and use them up while counting 0, 1, 2, … (number m needs a spare number with remainder m mod value).",
 "input": "[1,-10,7,13,6,8], value=5",
 "output": "4",
 "notes": [],
 "best": "Adding/subtracting value keeps a number's remainder mod value. So each number can become any non-negative number with the same remainder. Count numbers per remainder and use them up while counting 0, 1, 2, … (number m needs a spare number with remainder m mod value).",
 "variants": [
  {
   "name": "Count remainders modulo value",
   "code": "class Solution:\n    def findSmallestInteger(self, nums, value):\n        cnt = Counter(x % value for x in nums)\n        mex = 0\n        while cnt[mex % value] > 0:\n            cnt[mex % value] -= 1\n            mex += 1\n        return mex",
   "time": "O(n)",
   "space": "O(value)",
   "explain": "Adding/subtracting value keeps a number's remainder mod value. So each number can become any non-negative number with the same remainder. Count numbers per remainder and use them up while counting 0, 1, 2, … (number m needs a spare number with remainder m mod value).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Smallest remainder bucket",
   "tag": "Alternative",
   "code": "class Solution:\n    def findSmallestInteger(self, nums, value):\n        cnt = Counter(x % value for x in nums)\n        return min(cnt[r] * value + r for r in range(value))",
   "time": "O(n + value)",
   "space": "O(value)",
   "explain": "The MEX is limited by the remainder class that runs out first: min over r of count[r] · value + r.",
   "frames": [],
   "alt": true
  }
 ]
};
