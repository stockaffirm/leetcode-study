window.PROBLEM = {
 "id": "93",
 "title": "Restore IP Addresses",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "A valid IP address has exactly four numbers separated by dots; each number is between 0 and 255 and has no leading zero (so '0' is fine but '01' is not). Given a string s made only of digits, return every valid IP address you can make by inserting three dots into it (you may not remove or reorder digits). Example: '25525511135' → ['255.255.11.135', '255.255.111.35'].",
 "why": "Put 3 dots into a string of digits to make a valid IP address (4 numbers 0–255, no leading zeros). '25525511135' → 255.255.11.135 or 255.255.111.35.",
 "idea": "Choose the first segment (1, 2 or 3 digits), then the next, and so on; stop a branch when a segment is above 255 or has a leading zero. A path is valid if it uses exactly 4 segments and all the digits.",
 "input": "\"25525511135\"",
 "output": "[\"255.255.11.135\", \"255.255.111.35\"]",
 "notes": [],
 "best": "Choose the first segment (1, 2 or 3 digits), then the next, and so on; stop a branch when a segment is above 255 or has a leading zero. A path is valid if it uses exactly 4 segments and all the digits.",
 "variants": [
  {
   "name": "Backtracking over segment lengths",
   "code": "class Solution:\n    def restoreIpAddresses(self, s):\n        ans = []\n        def go(start, parts):\n            if len(parts) == 4:\n                if start == len(s): ans.append('.'.join(parts))\n                return\n            for size in (1, 2, 3):\n                seg = s[start:start + size]\n                if len(seg) < size: break\n                if (seg[0] == '0' and size > 1) or int(seg) > 255: continue\n                go(start + size, parts + [seg])\n        go(0, [])\n        return ans",
   "time": "O(1) (at most 81 splits)",
   "space": "O(1)",
   "explain": "Choose the first segment (1, 2 or 3 digits), then the next, and so on; stop a branch when a segment is above 255 or has a leading zero. A path is valid if it uses exactly 4 segments and all the digits.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Three cut points",
   "tag": "Alternative",
   "code": "class Solution:\n    def restoreIpAddresses(self, s):\n        ans, n = [], len(s)\n        ok = lambda t: t and len(t) <= 3 and (t == '0' or t[0] != '0') and int(t) <= 255\n        for a in range(1, 4):\n            for b in range(a + 1, a + 4):\n                for c in range(b + 1, b + 4):\n                    p = [s[:a], s[a:b], s[b:c], s[c:]]\n                    if c < n and all(ok(x) for x in p): ans.append('.'.join(p))\n        return ans",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Choose where to cut after the 1st, 2nd and 3rd segment with three loops and validate each piece.",
   "frames": [],
   "alt": true
  }
 ]
};
