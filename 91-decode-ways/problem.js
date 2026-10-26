window.PROBLEM = {
 "id": "91",
 "title": "Decode Ways",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'A'=1 … 'Z'=26. In how many ways can a digit string be decoded into letters?",
 "idea": "ways[i] = (ways[i−1] if the last digit is 1–9) + (ways[i−2] if the last two digits form 10–26).",
 "input": "'226'",
 "output": "3",
 "notes": [],
 "best": "ways[i] = (ways[i−1] if the last digit is 1–9) + (ways[i−2] if the last two digits form 10–26).",
 "variants": [
  {
   "name": "1D DP over positions",
   "code": "class Solution:\n    def numDecodings(self, s):\n        prev, cur = 1, 1\n        if s[0] == '0': return 0\n        for i in range(1, len(s)):\n            nxt = 0\n            if s[i] != '0': nxt += cur\n            if 10 <= int(s[i - 1:i + 1]) <= 26: nxt += prev\n            prev, cur = cur, nxt\n        return cur",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "ways[i] = (ways[i−1] if the last digit is 1–9) + (ways[i−2] if the last two digits form 10–26).",
   "frames": []
  }
 ]
};
