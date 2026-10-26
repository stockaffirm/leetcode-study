window.PROBLEM = {
 "id": "3076",
 "title": "Shortest Uncommon Substring in an Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "For each string, find the shortest piece (substring) of it that appears in NO other string; among equally short ones the alphabetically smallest; empty if none.",
 "idea": "Collect every substring of every string in a set. For a string, check its substrings from shortest (alphabetical) and take the first that is not in any OTHER string's set.",
 "input": "[\"cab\",\"ad\",\"bad\",\"c\"]",
 "output": "[\"ab\",\"\",\"ba\",\"\"]",
 "notes": [],
 "best": "Collect every substring of every string in a set. For a string, check its substrings from shortest (alphabetical) and take the first that is not in any OTHER string's set.",
 "variants": [
  {
   "name": "Sets of all substrings",
   "code": "class Solution:\n    def shortestSubstrings(self, arr):\n        n = len(arr)\n        subs = [set() for _ in range(n)]\n        for i, s in enumerate(arr):\n            for a in range(len(s)):\n                for b in range(a + 1, len(s) + 1): subs[i].add(s[a:b])\n        ans = []\n        for i, s in enumerate(arr):\n            others = set().union(*(subs[j] for j in range(n) if j != i))\n            best = ''\n            for t in sorted(subs[i], key=lambda x: (len(x), x)):\n                if t not in others:\n                    best = t\n                    break\n            ans.append(best)\n        return ans",
   "time": "O(n·L³)",
   "space": "O(n·L²)",
   "explain": "Collect every substring of every string in a set. For a string, check its substrings from shortest (alphabetical) and take the first that is not in any OTHER string's set.",
   "frames": []
  }
 ]
};
