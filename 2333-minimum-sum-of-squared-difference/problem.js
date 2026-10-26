window.PROBLEM = {
 "id": "2333",
 "title": "Minimum Sum of Squared Difference",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "Two lists. You may change elements by ±1 up to k1 times in the first and k2 times in the second. Minimise Σ(nums1[i] − nums2[i])².",
 "idea": "Only the absolute differences matter and every operation can reduce one difference by 1; reduce the LARGEST differences first. Lower the whole top group to the next level while operations last, then spread the remainder inside the group.",
 "input": "[1,2,3,4], [2,10,20,19], k1=k2=0",
 "output": "579",
 "notes": [],
 "best": "Only the absolute differences matter and every operation can reduce one difference by 1; reduce the LARGEST differences first. Lower the whole top group to the next level while operations last, then spread the remainder inside the group.",
 "variants": [
  {
   "name": "Shave the biggest differences level by level",
   "code": "class Solution:\n    def minSumSquareDiff(self, nums1, nums2, k1, k2):\n        cnt = Counter(abs(a - b) for a, b in zip(nums1, nums2))\n        k = k1 + k2\n        vals = sorted(cnt, reverse=True)\n        group = 0\n        for i, v in enumerate(vals):\n            group += cnt[v]\n            nxt = vals[i + 1] if i + 1 < len(vals) else 0\n            need = (v - nxt) * group\n            if k >= need: k -= need\n            else:\n                q, r = divmod(k, group)\n                rest = sum(x * x * cnt[x] for x in vals[i + 1:])\n                return rest + (group - r) * (v - q) ** 2 + r * (v - q - 1) ** 2\n        return 0",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Only the absolute differences matter and every operation can reduce one difference by 1; reduce the LARGEST differences first. Lower the whole top group to the next level while operations last, then spread the remainder inside the group.",
   "frames": []
  }
 ]
};
