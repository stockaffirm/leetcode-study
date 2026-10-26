window.PROBLEM = {
 "id": "2143",
 "title": "Choose Numbers From Two Arrays in Range",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "For every index in a chosen range [l, r] you pick the number from nums1 or from nums2; the pick is balanced if the sum of numbers taken from nums1 equals the sum taken from nums2. Count the balanced (range, picks) combinations modulo 1 000 000 007. Example: [1,2,5] and [2,6,3] → 3.",
 "why": "nums1=[1,2,5], nums2=[2,6,3]: three balanced ways exist → 3.",
 "idea": "Track the balance (sum of picks from nums1 minus sum of picks from nums2) for a range ending at i. Each range either starts at i or extends one ending at i−1, and at i it adds +nums1[i] or −nums2[i]. Keep a dictionary balance → ways; every way with balance 0 is a valid balanced choice.",
 "input": "nums1 = [1,2,5], nums2 = [2,6,3]",
 "output": "3",
 "notes": [],
 "best": "Track the balance (sum of picks from nums1 minus sum of picks from nums2) for a range ending at i. Each range either starts at i or extends one ending at i−1, and at i it adds +nums1[i] or −nums2[i]. Keep a dictionary balance → ways; every way with balance 0 is a valid balanced choice.",
 "variants": [
  {
   "name": "Count balances of sum1 − sum2 ending here",
   "code": "class Solution:\n    def countSubranges(self, nums1, nums2):\n        MOD = 10**9 + 7\n        cur = defaultdict(int)\n        res = 0\n        for a, b in zip(nums1, nums2):\n            new = defaultdict(int)\n            new[a] += 1\n            new[-b] += 1\n            for d, c in cur.items():\n                new[d + a] = (new[d + a] + c) % MOD\n                new[d - b] = (new[d - b] + c) % MOD\n            cur = new\n            res = (res + cur[0]) % MOD\n        return res",
   "time": "O(n · S)",
   "space": "O(S)",
   "explain": "Track the balance (sum of picks from nums1 minus sum of picks from nums2) for a range ending at i. Each range either starts at i or extends one ending at i−1, and at i it adds +nums1[i] or −nums2[i]. Keep a dictionary balance → ways; every way with balance 0 is a valid balanced choice.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every range and every choice",
   "tag": "Brute force",
   "code": "class Solution:\n    def countSubranges(self, nums1, nums2):\n        n = len(nums1)\n        res = 0\n        for l in range(n):\n            for r in range(l, n):\n                for pick in product((0, 1), repeat=r - l + 1):\n                    s1 = sum(nums1[l + i] for i, p in enumerate(pick) if p == 0)\n                    s2 = sum(nums2[l + i] for i, p in enumerate(pick) if p == 1)\n                    res += s1 == s2\n        return res % (10**9 + 7)",
   "time": "O(n²·2ⁿ)",
   "space": "O(n)",
   "explain": "Only for tiny arrays: for each range test all 2^len ways of picking from nums1 or nums2.",
   "frames": [],
   "alt": true
  }
 ]
};
