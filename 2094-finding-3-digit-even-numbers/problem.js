window.PROBLEM = {
 "id": "2094",
 "title": "Finding 3-Digit Even Numbers",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
