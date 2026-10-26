window.PROBLEM = {
 "id": "1358",
 "title": "Number of Substrings Containing All Three Characters",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "'abcabc': there are 10 substrings containing a, b and c.",
 "idea": "Walk through the string and remember the last position of 'a', 'b' and 'c'. For a substring ending at i to contain all three, it must start at or before the smallest of the three last positions — that is min(last) + 1 choices.",
 "input": "s = \"abcabc\"",
 "output": "10",
 "notes": [],
 "best": "Walk through the string and remember the last position of 'a', 'b' and 'c'. For a substring ending at i to contain all three, it must start at or before the smallest of the three last positions — that is min(last) + 1 choices.",
 "variants": [
  {
   "name": "Last position of a, b and c",
   "code": "class Solution:\n    def numberOfSubstrings(self, s):\n        last = [-1, -1, -1]\n        res = 0\n        for i, ch in enumerate(s):\n            last[\"abc\".index(ch)] = i\n            res += min(last) + 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk through the string and remember the last position of 'a', 'b' and 'c'. For a substring ending at i to contain all three, it must start at or before the smallest of the three last positions — that is min(last) + 1 choices.",
   "frames": []
  }
 ]
};
