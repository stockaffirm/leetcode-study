window.PROBLEM = {
 "id": "2734",
 "title": "Lexicographically Smallest String After Substring Operation",
 "level": "Medium",
 "topic": "Greedy",
 "question": "In one operation (used once) pick a non-empty substring and replace each letter by the previous letter of the alphabet ('a' becomes 'z'). Return the lexicographically smallest result. Example: 'cbabc' → 'baabc'.",
 "why": "'cbabc' → decrement 'cb' to 'ba' → 'baabc'.",
 "idea": "The operation replaces every letter of one chosen substring by its previous letter ('a' becomes 'z'). To make the string smallest, start at the first letter that is not 'a' and decrement until the next 'a'. If the string is all 'a', change only the last letter to 'z'.",
 "input": "s = \"cbabc\"",
 "output": "\"baabc\"",
 "notes": [],
 "best": "The operation replaces every letter of one chosen substring by its previous letter ('a' becomes 'z'). To make the string smallest, start at the first letter that is not 'a' and decrement until the next 'a'. If the string is all 'a', change only the last letter to 'z'.",
 "variants": [
  {
   "name": "Decrement the first run that is not 'a'",
   "code": "class Solution:\n    def smallestString(self, s):\n        a = list(s)\n        i = 0\n        while i < len(a) and a[i] == 'a':\n            i += 1\n        if i == len(a):\n            a[-1] = 'z'\n            return ''.join(a)\n        while i < len(a) and a[i] != 'a':\n            a[i] = chr(ord(a[i]) - 1)\n            i += 1\n        return ''.join(a)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The operation replaces every letter of one chosen substring by its previous letter ('a' becomes 'z'). To make the string smallest, start at the first letter that is not 'a' and decrement until the next 'a'. If the string is all 'a', change only the last letter to 'z'.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Find the run with indices",
   "tag": "Alternative",
   "code": "class Solution:\n    def smallestString(self, s):\n        start = next((i for i, c in enumerate(s) if c != 'a'), None)\n        if start is None:\n            return s[:-1] + 'z'\n        end = start\n        while end < len(s) and s[end] != 'a':\n            end += 1\n        mid = ''.join(chr(ord(c) - 1) for c in s[start:end])\n        return s[:start] + mid + s[end:]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Locate the first non-'a' and the end of its run, then rebuild the string.",
   "frames": [],
   "alt": true
  }
 ]
};
