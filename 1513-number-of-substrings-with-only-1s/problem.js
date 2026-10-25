window.PROBLEM = {
 "id": "1513",
 "title": "Number of Substrings With Only 1s",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Return the number of substrings of a binary string that consist only of 1s, modulo 1 000 000 007. Example: '0110111' → 9.",
 "why": "'0110111': runs of 2 and 3 ones → 3 + 6 = 9.",
 "idea": "Every substring of all 1s lies inside one run of consecutive 1s. A run of length L contains L(L+1)/2 substrings. Count them with a running length (each new 1 adds 'current run length' new substrings).",
 "input": "s = \"0110111\"",
 "output": "9",
 "notes": [],
 "best": "Every substring of all 1s lies inside one run of consecutive 1s. A run of length L contains L(L+1)/2 substrings. Count them with a running length (each new 1 adds 'current run length' new substrings).",
 "variants": [
  {
   "name": "Run of length L gives L(L+1)/2",
   "code": "class Solution:\n    def numSub(self, s):\n        run = total = 0\n        for c in s:\n            run = run + 1 if c == '1' else 0\n            total += run\n        return total % (10**9 + 7)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Every substring of all 1s lies inside one run of consecutive 1s. A run of length L contains L(L+1)/2 substrings. Count them with a running length (each new 1 adds 'current run length' new substrings).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Group the runs",
   "tag": "Alternative",
   "code": "class Solution:\n    def numSub(self, s):\n        total = 0\n        for ch, g in groupby(s):\n            if ch == '1':\n                L = len(list(g))\n                total += L * (L + 1) // 2\n        return total % (10**9 + 7)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For every run of 1s of length L add L(L+1)/2.",
   "frames": [],
   "alt": true
  }
 ]
};
