window.PROBLEM = {
 "id": "925",
 "title": "Long Pressed Name",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
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
   "frames": []
  }
 ]
};
