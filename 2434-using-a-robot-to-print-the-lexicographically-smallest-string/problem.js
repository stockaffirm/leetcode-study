window.PROBLEM = {
 "id": "2434",
 "title": "Using a Robot to Print the Lexicographically Smallest String",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
