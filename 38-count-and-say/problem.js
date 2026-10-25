window.PROBLEM = {
 "id": "38",
 "title": "Count and Say",
 "level": "Medium",
 "topic": "Array / String",
 "question": "The count-and-say sequence starts with '1'; each term describes the previous one by reading groups of equal digits aloud ('21' = one 2, one 1 → '1211'). Return the n-th term. Example: n=4 → '1211'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion on n",
   "tag": "Alternative",
   "code": "class Solution:\n    def countAndSay(self, n):\n        if n == 1:\n            return \"1\"\n        prev = self.countAndSay(n - 1)\n        out = []\n        i = 0\n        while i < len(prev):\n            j = i\n            while j < len(prev) and prev[j] == prev[i]:\n                j += 1\n            out.append(str(j - i) + prev[i])\n            i = j\n        return \"\".join(out)",
   "time": "O(2ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "Build term n−1 first and read it run by run.",
   "frames": [],
   "alt": true
  }
 ]
};
