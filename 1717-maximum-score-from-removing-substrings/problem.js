window.PROBLEM = {
 "id": "1717",
 "title": "Maximum Score From Removing Substrings",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'cdbcbbaaabab', ab=4, ba=5: take 'ba' first, then 'ab' → 19.",
 "idea": "Removing 'ab' scores x and 'ba' scores y. Do the more valuable pair first with a stack scan (push letters, pop when the top and the new letter form the pair), then remove the other pair from what is left.",
 "input": "s = \"cdbcbbaaabab\", x = 4, y = 5",
 "output": "19",
 "notes": [],
 "best": "Removing 'ab' scores x and 'ba' scores y. Do the more valuable pair first with a stack scan (push letters, pop when the top and the new letter form the pair), then remove the other pair from what is left.",
 "variants": [
  {
   "name": "Remove the higher-valued pair first, with a stack",
   "code": "class Solution:\n    def maximumGain(self, s, x, y):\n        def remove(s, a, b, val):\n            st = []\n            gain = 0\n            for c in s:\n                if st and st[-1] == a and c == b:\n                    st.pop()\n                    gain += val\n                else:\n                    st.append(c)\n            return ''.join(st), gain\n        if x >= y:\n            s, g1 = remove(s, 'a', 'b', x)\n            s, g2 = remove(s, 'b', 'a', y)\n        else:\n            s, g1 = remove(s, 'b', 'a', y)\n            s, g2 = remove(s, 'a', 'b', x)\n        return g1 + g2",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Removing 'ab' scores x and 'ba' scores y. Do the more valuable pair first with a stack scan (push letters, pop when the top and the new letter form the pair), then remove the other pair from what is left.",
   "frames": []
  }
 ]
};
