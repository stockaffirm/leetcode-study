window.PROBLEM = {
 "id": "925",
 "title": "Long Pressed Name",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "While typing a name, a key can be held too long so a letter appears more than once. Return True if the typed text could have been produced from the name this way (every letter of the name appears in order, possibly repeated). Example: name 'alex', typed 'aaleex' → True; name 'saeed', typed 'ssaaedd' → False.",
 "why": "Typing a name, a key may have been held down so a letter repeats. Could the typed text have come from the name?",
 "idea": "Walk through the typed text with a pointer into the name: a matching letter advances both; otherwise it must be a repeat of the previous typed letter.",
 "input": "name 'alex', typed 'aaleex'",
 "output": "True",
 "notes": [],
 "best": "Walk through the typed text with a pointer into the name: a matching letter advances both; otherwise it must be a repeat of the previous typed letter.",
 "variants": [
  {
   "name": "Two pointers",
   "code": "class Solution:\n    def isLongPressedName(self, name, typed):\n        i = 0\n        for j in range(len(typed)):\n            if i < len(name) and name[i] == typed[j]: i += 1\n            elif j == 0 or typed[j] != typed[j - 1]: return False\n        return i == len(name)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk through the typed text with a pointer into the name: a matching letter advances both; otherwise it must be a repeat of the previous typed letter.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare runs of letters",
   "tag": "Alternative",
   "code": "class Solution:\n    def isLongPressedName(self, name, typed):\n        g1 = [(c, len(list(g))) for c, g in groupby(name)]\n        g2 = [(c, len(list(g))) for c, g in groupby(typed)]\n        if len(g1) != len(g2): return False\n        return all(c1 == c2 and n1 <= n2 for (c1, n1), (c2, n2) in zip(g1, g2))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Group both strings into runs; each typed run must have the same letter and at least as many repeats.",
   "frames": [],
   "alt": true
  }
 ]
};
