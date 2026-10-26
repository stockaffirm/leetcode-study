window.PROBLEM = {
 "id": "3076",
 "title": "Shortest Uncommon Substring in an Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "You are given a list of non-empty strings arr. For each string, find its shortest substring (a piece of consecutive letters) that does NOT appear as a substring of any OTHER string in the list; if several are equally short pick the alphabetically smallest; if there is none use an empty string. Return the answers as a list. Example: ['cab','ad','bad','c'] → ['ab','','ba',''].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Search with the 'in' operator",
   "tag": "Alternative",
   "code": "class Solution:\n    def shortestSubstrings(self, arr):\n        ans = []\n        for i, s in enumerate(arr):\n            best = ''\n            for L in range(1, len(s) + 1):\n                cands = sorted({s[a:a + L] for a in range(len(s) - L + 1)})\n                for t in cands:\n                    if not any(t in arr[j] for j in range(len(arr)) if j != i):\n                        best = t\n                        break\n                if best: break\n            ans.append(best)\n        return ans",
   "time": "O(n·L³)",
   "space": "O(L²)",
   "explain": "For each length try the substrings in alphabetical order and test them against the other strings directly.",
   "frames": [],
   "alt": true
  }
 ]
};
