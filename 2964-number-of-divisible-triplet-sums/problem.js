window.PROBLEM = {
 "id": "2964",
 "title": "Number of Divisible Triplet Sums",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Count the triples of positions i < j < k such that nums[i] + nums[j] + nums[k] is divisible by d (leaves no remainder). Example: nums [3,3,4,7,8], d=5 → 3.",
 "why": "Count the triples of positions i < j < k whose three numbers add up to a multiple of d.",
 "idea": "Sweep k from left to right. Keep a count of the remainders (mod d) of all pair sums (i, j) with j < k. The triples ending at k are those pairs whose remainder is (−nums[k]) mod d. Then add the pairs (i, k) to the map.",
 "input": "[3,3,4,7,8], d=5",
 "output": "3",
 "notes": [],
 "best": "Sweep k from left to right. Keep a count of the remainders (mod d) of all pair sums (i, j) with j < k. The triples ending at k are those pairs whose remainder is (−nums[k]) mod d. Then add the pairs (i, k) to the map.",
 "variants": [
  {
   "name": "Pair remainders in a hash map",
   "code": "class Solution:\n    def divisibleTripletCount(self, nums, d):\n        seen = defaultdict(int)\n        count = 0\n        for k in range(len(nums)):\n            count += seen[(-nums[k]) % d]\n            for i in range(k):\n                seen[(nums[i] + nums[k]) % d] += 1\n        return count",
   "time": "O(n²)",
   "space": "O(d)",
   "explain": "Sweep k from left to right. Keep a count of the remainders (mod d) of all pair sums (i, j) with j < k. The triples ending at k are those pairs whose remainder is (−nums[k]) mod d. Then add the pairs (i, k) to the map.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Three loops",
   "tag": "Brute force",
   "code": "class Solution:\n    def divisibleTripletCount(self, nums, d):\n        return sum(1 for a, b, c in combinations(nums, 3) if (a + b + c) % d == 0)",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Test every triple directly.",
   "frames": [],
   "alt": true
  }
 ]
};
