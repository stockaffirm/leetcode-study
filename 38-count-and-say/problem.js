window.PROBLEM = {
 "id": "38",
 "title": "Count and Say",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "1 → '11' (one 1) → '21' (two 1s) → '1211' (one 2, one 1).",
 "idea": "Start from '1'. To get the next term read the previous one in groups of equal digits and write 'count then digit' for each group.",
 "input": "n = 4",
 "output": "\"1211\"",
 "notes": [],
 "best": "Start from '1'. To get the next term read the previous one in groups of equal digits and write 'count then digit' for each group.",
 "variants": [
  {
   "name": "Describe the previous term",
   "code": "class Solution:\n    def countAndSay(self, n):\n        s = \"1\"\n        for _ in range(n - 1):\n            s = \"\".join(str(len(list(g))) + k for k, g in groupby(s))\n        return s",
   "time": "O(2ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "Start from '1'. To get the next term read the previous one in groups of equal digits and write 'count then digit' for each group.",
   "frames": []
  }
 ]
};
