window.PROBLEM = {
 "id": "2468",
 "title": "Split Message Based on Limit",
 "level": "Hard",
 "topic": "Array / String",
 "question": "Split a message into parts. Part number a (of b parts in total) must end with the suffix '<a/b>' and every part except possibly the last must have exactly 'limit' characters including the suffix; removing the suffixes and joining the parts must give the original message. Use as few parts as possible; return the parts, or an empty list if impossible. Example: 'short message', limit 15 → ['short mess<1/2>','age<2/2>'].",
 "why": "Split a message into parts that each end with a suffix '<i/b>' (part number i of b parts) and have exactly 'limit' characters in total (the last part may be shorter). Use the fewest parts; return [] if impossible.",
 "idea": "Try b = 1, 2, 3, …: with b parts the room for message text in part i is limit − len('<i/b>'). The first b where the total room reaches the message length is the answer; then cut the message greedily.",
 "input": "'short message', limit 15",
 "output": "['short mess<1/2>','age<2/2>']",
 "notes": [],
 "best": "Try b = 1, 2, 3, …: with b parts the room for message text in part i is limit − len('<i/b>'). The first b where the total room reaches the message length is the answer; then cut the message greedily.",
 "variants": [
  {
   "name": "Find the smallest part count, then cut",
   "code": "class Solution:\n    def splitMessage(self, message, limit):\n        n = len(message)\n        for b in range(1, n + 1):\n            d = len(str(b))\n            if limit - 3 - d - d <= 0: return []\n            total = b * (limit - 3 - d) - sum(len(str(i)) for i in range(1, b + 1))\n            if total >= n:\n                res, pos = [], 0\n                for i in range(1, b + 1):\n                    suffix = '<%d/%d>' % (i, b)\n                    take = limit - len(suffix)\n                    res.append(message[pos:pos + take] + suffix)\n                    pos += take\n                return res\n        return []",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Try b = 1, 2, 3, …: with b parts the room for message text in part i is limit − len('<i/b>'). The first b where the total room reaches the message length is the answer; then cut the message greedily.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try each part count by building the parts",
   "tag": "Alternative",
   "code": "class Solution:\n    def splitMessage(self, message, limit):\n        n = len(message)\n        for b in range(1, n + 1):\n            pos, parts, ok, take = 0, [], True, 0\n            for i in range(1, b + 1):\n                suf = '<%d/%d>' % (i, b)\n                take = limit - len(suf)\n                if take <= 0:\n                    ok = False\n                    break\n                parts.append(message[pos:pos + take] + suf)\n                pos += take\n            if not ok: return []\n            if pos >= n and pos - take < n: return parts\n        return []",
   "time": "O(n·b)",
   "space": "O(n)",
   "explain": "For every b actually cut the message and see whether it fits exactly into b parts.",
   "frames": [],
   "alt": true
  }
 ]
};
