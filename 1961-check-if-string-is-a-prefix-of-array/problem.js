window.PROBLEM = {
 "id": "1961",
 "title": "Check If String Is a Prefix of Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
