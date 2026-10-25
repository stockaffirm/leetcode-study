window.PROBLEM = {
 "id": "567",
 "title": "Permutation in String",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Given two strings s1 and s2, return true if some piece of s2 (letters sitting next to each other) is a rearrangement (permutation) of all the letters of s1, otherwise false. Example: s1='ab', s2='eidbaooo' → the piece 'ba' is a rearrangement of 'ab' → true. With s2='eidboaoo' → false.",
 "why": "Does the text contain some rearrangement of s1 as a continuous piece? s1='ab', s2='eidbaooo' → 'ba' is there → True.",
 "idea": "Slide a window the same length as s1 over s2 and compare letter counts; a match means a rearrangement is hiding there.",
 "input": "s1=\"ab\", s2=\"eidbaooo\"",
 "output": "True",
 "notes": [],
 "best": "Slide a window the same length as s1 over s2 and compare letter counts; a match means a rearrangement is hiding there.",
 "variants": [
  {
   "name": "Sliding window of counts",
   "code": "class Solution:\n    def checkInclusion(self, s1, s2):\n        need, win = Counter(s1), Counter()\n        for i, ch in enumerate(s2):\n            win[ch] += 1\n            if i >= len(s1):\n                old = s2[i - len(s1)]\n                win[old] -= 1\n                if win[old] == 0: del win[old]\n            if win == need: return True\n        return False",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Slide a window the same length as s1 over s2 and compare letter counts; a match means a rearrangement is hiding there.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort every window",
   "tag": "Brute force",
   "code": "class Solution:\n    def checkInclusion(self, s1, s2):\n        k, target = len(s1), sorted(s1)\n        for i in range(len(s2) - k + 1):\n            if sorted(s2[i:i + k]) == target: return True\n        return False",
   "time": "O(n·k log k)",
   "space": "O(k)",
   "explain": "Sort each window of s2 and compare with the sorted s1.",
   "frames": [],
   "alt": true
  }
 ]
};
