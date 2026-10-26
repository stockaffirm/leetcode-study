window.PROBLEM = {
 "id": "3106",
 "title": "Lexicographically Smallest String After Operations With Constraint",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "You may change letters (the alphabet wraps: z is next to a) with a total 'distance' budget k. Make the string alphabetically smallest.",
 "idea": "Go left to right. If the letter can be turned into 'a' within the remaining budget, do it and pay the (wrap-around) distance. Otherwise move it down as far as the budget allows and stop spending.",
 "input": "s=\"zbbz\", k=3",
 "output": "\"aaaz\"",
 "notes": [],
 "best": "Go left to right. If the letter can be turned into 'a' within the remaining budget, do it and pay the (wrap-around) distance. Otherwise move it down as far as the budget allows and stop spending.",
 "variants": [
  {
   "name": "Greedy letter by letter",
   "code": "class Solution:\n    def getSmallestString(self, s, k):\n        res = []\n        for ch in s:\n            d = min(ord(ch) - 97, 26 - (ord(ch) - 97))\n            if d <= k:\n                res.append('a')\n                k -= d\n            else:\n                res.append(chr(ord(ch) - k))\n                k = 0\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Go left to right. If the letter can be turned into 'a' within the remaining budget, do it and pay the (wrap-around) distance. Otherwise move it down as far as the budget allows and stop spending.",
   "frames": []
  }
 ]
};
