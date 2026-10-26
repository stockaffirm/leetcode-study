window.PROBLEM = {
 "id": "2143",
 "title": "Choose Numbers From Two Arrays in Range",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
