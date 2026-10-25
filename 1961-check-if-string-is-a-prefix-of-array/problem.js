window.PROBLEM = {
 "id": "1961",
 "title": "Check If String Is a Prefix of Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return True if the string s equals the concatenation of the first k words of the list for some k ≥ 1 (all those words are used completely). Example: s 'iloveleetcode', words ['i','love','leetcode','apples'] → True.",
 "why": "Is the string equal to the concatenation of the first k words of the list, for some k?",
 "idea": "Append the words one at a time; return True when the built text equals s, False once it gets longer.",
 "input": "s 'iloveleetcode', words ['i','love','leetcode','apples']",
 "output": "True",
 "notes": [],
 "best": "Append the words one at a time; return True when the built text equals s, False once it gets longer.",
 "variants": [
  {
   "name": "Concatenate until the length matches",
   "code": "class Solution:\n    def isPrefixString(self, s, words):\n        cur = ''\n        for w in words:\n            cur += w\n            if cur == s: return True\n            if len(cur) >= len(s): return False\n        return False",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Append the words one at a time; return True when the built text equals s, False once it gets longer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Join all, check prefix lengths",
   "tag": "Alternative",
   "code": "class Solution:\n    def isPrefixString(self, s, words):\n        return any(''.join(words[:k]) == s for k in range(1, len(words) + 1))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Try every prefix of the word list.",
   "frames": [],
   "alt": true
  }
 ]
};
