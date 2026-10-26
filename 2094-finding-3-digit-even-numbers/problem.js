window.PROBLEM = {
 "id": "2094",
 "title": "Finding 3-Digit Even Numbers",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given digits (possibly repeated) form all distinct 3-digit numbers that are even and have no leading zero, using each available digit at most as often as it is given. Return them in increasing order. Example: [2,1,3,0] → [102,120,130,132,210,230,302,310,312,320].",
 "why": "With the digits 2, 1, 3, 0 you can make 102, 120, 130, 132, 210, 230, 302, 310, 312, 320.",
 "idea": "Count the available digits. Test every even number from 100 to 998: count its digits and check that the pool has enough of each.",
 "input": "digits = [2,1,3,0]",
 "output": "[102,120,130,132,210,230,302,310,312,320]",
 "notes": [],
 "best": "Count the available digits. Test every even number from 100 to 998: count its digits and check that the pool has enough of each.",
 "variants": [
  {
   "name": "Check every even 3-digit number",
   "code": "class Solution:\n    def findEvenNumbers(self, digits):\n        cnt = Counter(digits)\n        res = []\n        for x in range(100, 1000, 2):\n            c = Counter(map(int, str(x)))\n            if all(cnt[d] >= k for d, k in c.items()):\n                res.append(x)\n        return res",
   "time": "O(450)",
   "space": "O(1)",
   "explain": "Count the available digits. Test every even number from 100 to 998: count its digits and check that the pool has enough of each.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Build numbers from digit permutations",
   "tag": "Alternative",
   "code": "class Solution:\n    def findEvenNumbers(self, digits):\n        return sorted({100 * a + 10 * b + c for a, b, c in permutations(digits, 3) if a and c % 2 == 0})",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Take every ordered triple of digits, skip leading zeros and odd endings, and collect the distinct numbers.",
   "frames": [],
   "alt": true
  }
 ]
};
