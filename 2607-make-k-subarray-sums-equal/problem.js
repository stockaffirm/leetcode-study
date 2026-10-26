window.PROBLEM = {
 "id": "2607",
 "title": "Make K-Subarray Sums Equal",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "arr [1,4,1,3], k=2 → positions 0,2 must match and 1,3 must match → 1.",
 "idea": "In the circular array every window of k elements must have the same sum, which forces arr[i] = arr[i + k] (indices modulo n). Elements split into gcd(n, k) cycles, and each cycle must become constant. The cheapest way to equalise a cycle is to move all its values to their median; add the costs.",
 "input": "arr = [1,4,1,3], k = 2",
 "output": "1",
 "notes": [],
 "best": "In the circular array every window of k elements must have the same sum, which forces arr[i] = arr[i + k] (indices modulo n). Elements split into gcd(n, k) cycles, and each cycle must become constant. The cheapest way to equalise a cycle is to move all its values to their median; add the costs.",
 "variants": [
  {
   "name": "Elements in the same gcd-cycle must be equal: use the median",
   "code": "class Solution:\n    def makeSubKSumEqual(self, arr, k):\n        n = len(arr)\n        g = gcd(n, k)\n        res = 0\n        for start in range(g):\n            vals = sorted(arr[start::g])\n            med = vals[len(vals) // 2]\n            res += sum(abs(v - med) for v in vals)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "In the circular array every window of k elements must have the same sum, which forces arr[i] = arr[i + k] (indices modulo n). Elements split into gcd(n, k) cycles, and each cycle must become constant. The cheapest way to equalise a cycle is to move all its values to their median; add the costs.",
   "frames": []
  }
 ]
};
