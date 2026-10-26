window.PROBLEM = {
 "id": "2434",
 "title": "Using a Robot to Print the Lexicographically Smallest String",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "A robot holds the string s and an empty string t. Move the first character of s to the back of t, or move the last character of t onto the paper. Return the lexicographically smallest string you can write on the paper (both strings must end up empty). Example: 'bac' → 'abc'.",
 "why": "'bac': push b, push a, pop a (nothing smaller remains), pop b, push c, pop c → 'abc'.",
 "idea": "The robot's string t is a stack. Write the top character to paper only when it is no larger than every character still unread (the smallest remaining letter, tracked with counts). Otherwise keep pushing.",
 "input": "s = \"bac\"",
 "output": "\"abc\"",
 "notes": [],
 "best": "The robot's string t is a stack. Write the top character to paper only when it is no larger than every character still unread (the smallest remaining letter, tracked with counts). Otherwise keep pushing.",
 "variants": [
  {
   "name": "Pop while the top is not worse than anything left",
   "code": "class Solution:\n    def robotWithString(self, s):\n        cnt = Counter(s)\n        st = []\n        res = []\n        mn = 'a'\n        for c in s:\n            st.append(c)\n            cnt[c] -= 1\n            while mn < 'z' and cnt[mn] == 0:\n                mn = chr(ord(mn) + 1)\n            while st and st[-1] <= mn:\n                res.append(st.pop())\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The robot's string t is a stack. Write the top character to paper only when it is no larger than every character still unread (the smallest remaining letter, tracked with counts). Otherwise keep pushing.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Precomputed suffix minimum",
   "tag": "Alternative",
   "code": "class Solution:\n    def robotWithString(self, s):\n        n = len(s)\n        suf = [''] * (n + 1)\n        suf[n] = '{'\n        for i in range(n - 1, -1, -1):\n            suf[i] = min(s[i], suf[i + 1])\n        st = []\n        res = []\n        for i, c in enumerate(s):\n            st.append(c)\n            while st and st[-1] <= suf[i + 1]:\n                res.append(st.pop())\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Instead of counts, precompute the smallest letter in every suffix; pop the stack while its top is not larger than the smallest letter still to come.",
   "frames": [],
   "alt": true
  }
 ]
};
