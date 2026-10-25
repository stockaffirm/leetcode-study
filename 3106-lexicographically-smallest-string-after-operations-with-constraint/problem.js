window.PROBLEM = {
 "id": "3106",
 "title": "Lexicographically Smallest String After Operations With Constraint",
 "level": "Medium",
 "topic": "Greedy",
 "question": "You are given a string s of lowercase letters and a number k. The distance between two letters is the number of steps between them on the alphabet written as a circle (so 'a' and 'z' are 1 apart). You may change any letters of s, as long as the total distance of all changes is at most k. Return the alphabetically SMALLEST string you can get. Example: s='zbbz', k=3 → z to a costs 1, b to a costs 1 twice → 'aaaz'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try each letter from 'a' upwards",
   "tag": "Alternative",
   "code": "class Solution:\n    def getSmallestString(self, s, k):\n        out = []\n        for ch in s:\n            x = ord(ch) - 97\n            for t in range(26):\n                cost = min(abs(x - t), 26 - abs(x - t))\n                if cost <= k:\n                    out.append(chr(97 + t))\n                    k -= cost\n                    break\n        return ''.join(out)",
   "time": "O(26·n)",
   "space": "O(n)",
   "explain": "For each position pick the smallest letter whose distance fits in the remaining budget.",
   "frames": [],
   "alt": true
  }
 ]
};
