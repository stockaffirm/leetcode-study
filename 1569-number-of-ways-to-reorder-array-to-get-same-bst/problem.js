window.PROBLEM = {
 "id": "1569",
 "title": "Number of Ways to Reorder Array to Get Same BST",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "[2,1,3] → [2,3,1] gives the same BST (Binary Search Tree) → 1.",
 "idea": "The first element is the root; elements smaller than it form the left subtree's insertion order, larger ones the right's. Any interleaving of the two orders (keeping each internally ordered) gives the same BST: C(len − 1, len(left)) ways times the ways of each side. Answer = ways − 1 (excluding the original order), modulo 1e9+7.",
 "input": "nums = [2,1,3]",
 "output": "1",
 "notes": [],
 "best": "The first element is the root; elements smaller than it form the left subtree's insertion order, larger ones the right's. Any interleaving of the two orders (keeping each internally ordered) gives the same BST: C(len − 1, len(left)) ways times the ways of each side. Answer = ways − 1 (excluding the original order), modulo 1e9+7.",
 "variants": [
  {
   "name": "Interleave the left and right subtrees' orders",
   "code": "class Solution:\n    def numOfWays(self, nums):\n        MOD = 10**9 + 7\n        def ways(arr):\n            if len(arr) <= 2:\n                return 1\n            left = [x for x in arr if x < arr[0]]\n            right = [x for x in arr if x > arr[0]]\n            return comb(len(arr) - 1, len(left)) * ways(left) * ways(right) % MOD\n        return (ways(nums) - 1) % MOD",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "The first element is the root; elements smaller than it form the left subtree's insertion order, larger ones the right's. Any interleaving of the two orders (keeping each internally ordered) gives the same BST: C(len − 1, len(left)) ways times the ways of each side. Answer = ways − 1 (excluding the original order), modulo 1e9+7.",
   "frames": []
  }
 ]
};
