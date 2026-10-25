window.PROBLEM = {
 "id": "1790",
 "title": "Check if One String Swap Can Make Strings Equal",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Two strings of the same length are given. You may do at most one swap of two letters inside ONE of the strings. Return True if the strings can become equal this way (equal already also counts). Example: 'bank' and 'kanb' → True (swap the first and last letters of one of them).",
 "why": "Can you make two strings equal by swapping two letters of ONE of them (at most once)?",
 "idea": "List the positions where the strings differ. Either there are none, or there are exactly two and they are mirror images of each other (a, b vs b, a).",
 "input": "\"bank\", \"kanb\"",
 "output": "True",
 "notes": [],
 "best": "List the positions where the strings differ. Either there are none, or there are exactly two and they are mirror images of each other (a, b vs b, a).",
 "variants": [
  {
   "name": "Collect the differing positions",
   "code": "class Solution:\n    def areAlmostEqual(self, s1, s2):\n        diff = [(a, b) for a, b in zip(s1, s2) if a != b]\n        return not diff or (len(diff) == 2 and diff[0] == diff[1][::-1])",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "List the positions where the strings differ. Either there are none, or there are exactly two and they are mirror images of each other (a, b vs b, a).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Counters + number of differences",
   "tag": "Alternative",
   "code": "class Solution:\n    def areAlmostEqual(self, s1, s2):\n        return Counter(s1) == Counter(s2) and sum(a != b for a, b in zip(s1, s2)) in (0, 2)",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "Same letters and at most two positions that differ.",
   "frames": [],
   "alt": true
  }
 ]
};
