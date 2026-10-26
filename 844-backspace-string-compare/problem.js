window.PROBLEM = {
 "id": "844",
 "title": "Backspace String Compare",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "'ab#c' and 'ad#c' both end up as 'ac' → true.",
 "idea": "Walk both strings from the right. A '#' means skip one more letter. Jump each pointer to its next real letter and compare; no extra memory is needed.",
 "input": "s = \"ab#c\", t = \"ad#c\"",
 "output": "true",
 "notes": [],
 "best": "Walk both strings from the right. A '#' means skip one more letter. Jump each pointer to its next real letter and compare; no extra memory is needed.",
 "variants": [
  {
   "name": "Two pointers from the end",
   "code": "class Solution:\n    def backspaceCompare(self, s, t):\n        def next_valid(x, i):\n            skip = 0\n            while i >= 0:\n                if x[i] == \"#\":\n                    skip += 1\n                elif skip:\n                    skip -= 1\n                else:\n                    break\n                i -= 1\n            return i\n        i, j = len(s) - 1, len(t) - 1\n        while i >= 0 or j >= 0:\n            i = next_valid(s, i)\n            j = next_valid(t, j)\n            if i >= 0 and j >= 0:\n                if s[i] != t[j]:\n                    return False\n            elif i >= 0 or j >= 0:\n                return False\n            i -= 1\n            j -= 1\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk both strings from the right. A '#' means skip one more letter. Jump each pointer to its next real letter and compare; no extra memory is needed.",
   "frames": []
  }
 ]
};
