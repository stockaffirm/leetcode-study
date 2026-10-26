window.PROBLEM = {
 "id": "1358",
 "title": "Number of Substrings Containing All Three Characters",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Return the number of substrings of a string made of only a, b and c that contain at least one of each letter. Example: 'abcabc' → 10.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sliding window",
   "tag": "Alternative",
   "code": "class Solution:\n    def numberOfSubstrings(self, s):\n        cnt = {\"a\": 0, \"b\": 0, \"c\": 0}\n        res = left = 0\n        for right, ch in enumerate(s):\n            cnt[ch] += 1\n            while all(cnt.values()):\n                res += len(s) - right\n                cnt[s[left]] -= 1\n                left += 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For each left end find the smallest right end that contains a, b and c; all later ends also work.",
   "frames": [],
   "alt": true
  }
 ]
};
