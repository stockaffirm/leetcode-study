window.PROBLEM = {
 "id": "2344",
 "title": "Minimum Deletions to Make Array Divisible",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "Delete as few numbers from nums as possible so that the smallest remaining number divides every number of numsDivide.",
 "idea": "A number divides all of numsDivide exactly when it divides their gcd. Find the smallest such number in nums; everything smaller than it must be deleted.",
 "input": "nums [2,3,2,4,3], numsDivide [9,6,9,3,15]",
 "output": "2",
 "notes": [],
 "best": "A number divides all of numsDivide exactly when it divides their gcd. Find the smallest such number in nums; everything smaller than it must be deleted.",
 "variants": [
  {
   "name": "gcd of the second array",
   "code": "class Solution:\n    def minOperations(self, nums, numsDivide):\n        g = reduce(gcd, numsDivide)\n        best = min((x for x in nums if g % x == 0), default=None)\n        if best is None: return -1\n        return sum(x < best for x in nums)",
   "time": "O(n + m)",
   "space": "O(1)",
   "explain": "A number divides all of numsDivide exactly when it divides their gcd. Find the smallest such number in nums; everything smaller than it must be deleted.",
   "frames": []
  }
 ]
};
