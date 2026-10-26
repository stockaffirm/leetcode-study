window.PROBLEM = {
 "id": "751",
 "title": "IP to CIDR",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "An IP address like 255.0.0.7 is really a 32-bit number. A CIDR block 'a.b.c.d/x' covers a run of consecutive addresses starting at that address; its size is 2^(32 − x), and the start address must be a multiple of that size. Given a starting address ip and a count n, return the SMALLEST list of CIDR blocks that covers exactly the n addresses starting at ip — no address outside that range, none missing. Example: ip='255.0.0.7', n=10 → ['255.0.0.7/32', '255.0.0.8/29', '255.0.0.16/32'] (1 + 8 + 1 = 10 addresses).",
 "why": "Cover exactly n consecutive IP addresses with as few 'CIDR blocks' as possible. A block starting at an address can only be as big as that address's lowest set bit allows.",
 "idea": "Treat the IP as a 32-bit number. At each start, take the biggest block that is both aligned (lowest set bit) and not larger than what is left (n). Write it as ip/(32−log2 size).",
 "input": "ip=\"255.0.0.7\", n=10",
 "output": "[\"255.0.0.7/32\", \"255.0.0.8/29\", \"255.0.0.16/32\"]",
 "notes": [],
 "best": "Treat the IP as a 32-bit number. At each start, take the biggest block that is both aligned (lowest set bit) and not larger than what is left (n). Write it as ip/(32−log2 size).",
 "variants": [
  {
   "name": "Greedy biggest aligned block",
   "code": "class Solution:\n    def ipToCIDR(self, ip, n):\n        def to_int(s):\n            x = 0\n            for p in s.split('.'): x = x * 256 + int(p)\n            return x\n        def to_ip(x):\n            return '.'.join(str((x >> s) & 255) for s in (24, 16, 8, 0))\n        x, ans = to_int(ip), []\n        while n > 0:\n            low = x & -x if x else 1 << 32\n            size = min(low, 1 << (n.bit_length() - 1))\n            ans.append(to_ip(x) + '/' + str(33 - size.bit_length()))\n            x += size\n            n -= size\n        return ans",
   "time": "O(log n) blocks",
   "space": "O(log n)",
   "explain": "Treat the IP as a 32-bit number. At each start, take the biggest block that is both aligned (lowest set bit) and not larger than what is left (n). Write it as ip/(32−log2 size).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Grow the block step by step",
   "tag": "Alternative",
   "code": "class Solution:\n    def ipToCIDR(self, ip, n):\n        a, b, c, d = map(int, ip.split('.'))\n        x = (a << 24) | (b << 16) | (c << 8) | d\n        ans = []\n        while n > 0:\n            size = 1\n            while x % (size * 2) == 0 and size * 2 <= n:\n                size *= 2\n            ans.append('.'.join(str((x >> s) & 255) for s in (24, 16, 8, 0)) + '/' + str(33 - size.bit_length()))\n            x += size\n            n -= size\n        return ans",
   "time": "O(log² n)",
   "space": "O(log n)",
   "explain": "At each address keep doubling the block while it stays aligned and still fits in n.",
   "frames": [],
   "alt": true
  }
 ]
};
