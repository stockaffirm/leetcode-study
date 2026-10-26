window.PROBLEM = {
 "id": "93",
 "title": "Restore IP Addresses",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
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
   "frames": []
  }
 ]
};
