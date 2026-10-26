window.PROBLEM = {
 "id": "2598",
 "title": "Smallest Missing Non-negative Integer After Operations",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
