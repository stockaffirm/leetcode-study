window.PROBLEM = {
 "id": "1726",
 "title": "Tuple with Same Product",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Count the tuples (a, b, c, d) of distinct elements with a·b = c·d. Example: [2,3,4,6] → 8.",
 "why": "[2,3,4,6]: 2·6 = 3·4 = 12 → 8 tuples.",
 "idea": "Count how many pairs (a, b) give each product. A product that arises from c pairs gives c(c−1)/2 ways to choose two pairs, and each choice yields 8 tuples (orderings).",
 "input": "nums = [2,3,4,6]",
 "output": "8",
 "notes": [],
 "best": "Count how many pairs (a, b) give each product. A product that arises from c pairs gives c(c−1)/2 ways to choose two pairs, and each choice yields 8 tuples (orderings).",
 "variants": [
  {
   "name": "Count pairs with the same product",
   "code": "class Solution:\n    def tupleSameProduct(self, nums):\n        cnt = Counter()\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                cnt[nums[i] * nums[j]] += 1\n        return 8 * sum(c * (c - 1) // 2 for c in cnt.values())",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Count how many pairs (a, b) give each product. A product that arises from c pairs gives c(c−1)/2 ways to choose two pairs, and each choice yields 8 tuples (orderings).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count by sorted pairs",
   "tag": "Alternative",
   "code": "class Solution:\n    def tupleSameProduct(self, nums):\n        groups = defaultdict(int)\n        for a, b in combinations(nums, 2):\n            groups[a * b] += 1\n        return sum(8 * c * (c - 1) // 2 for c in groups.values())",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Group pairs by product using a dictionary of lists.",
   "frames": [],
   "alt": true
  }
 ]
};
