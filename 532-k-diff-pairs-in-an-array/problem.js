window.PROBLEM = {
 "id": "532",
 "title": "K-diff Pairs in an Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Return the number of UNIQUE pairs of values (a, b) in nums whose absolute difference is exactly k. Example: [3,1,4,1,5], k=2 → 2.",
 "why": "[3,1,4,1,5], k=2: pairs (1,3) and (3,5) → 2 (the repeated 1 counts once).",
 "idea": "Count each value. For k > 0 a pair is (x, x + k), so count the distinct x where x + k is also present. For k = 0 a pair needs a value that appears at least twice.",
 "input": "nums = [3,1,4,1,5], k = 2",
 "output": "2",
 "notes": [],
 "best": "Count each value. For k > 0 a pair is (x, x + k), so count the distinct x where x + k is also present. For k = 0 a pair needs a value that appears at least twice.",
 "variants": [
  {
   "name": "Count values whose partner x + k exists",
   "code": "class Solution:\n    def findPairs(self, nums, k):\n        cnt = Counter(nums)\n        if k == 0:\n            return sum(c > 1 for c in cnt.values())\n        return sum(x + k in cnt for x in cnt)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count each value. For k > 0 a pair is (x, x + k), so count the distinct x where x + k is also present. For k = 0 a pair needs a value that appears at least twice.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect pairs in a set",
   "tag": "Brute force",
   "code": "class Solution:\n    def findPairs(self, nums, k):\n        pairs = set()\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if abs(nums[i] - nums[j]) == k:\n                    pairs.add((min(nums[i], nums[j]), max(nums[i], nums[j])))\n        return len(pairs)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Look at every pair of positions and store the (smaller, larger) value pair when the difference is k.",
   "frames": [],
   "alt": true
  }
 ]
};
