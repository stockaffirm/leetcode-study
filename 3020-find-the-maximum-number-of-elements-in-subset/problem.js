window.PROBLEM = {
 "id": "3020",
 "title": "Find the Maximum Number of Elements in Subset",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[5,4,1,2,2]: the subset [2,4,2] has the pattern x, x², x → 3.",
 "idea": "A valid subset looks like x, x², x⁴, …, x^k, …, x⁴, x², x. For each value x ≠ 1 follow the chain x → x² → x⁴ … while at least two copies exist (each adds 2 elements); at the end add 1 if a single copy of the next power exists, otherwise drop the last pair's top (−1). Value 1 is special because 1² = 1: use the largest odd count of 1s.",
 "input": "nums = [5,4,1,2,2]",
 "output": "3",
 "notes": [],
 "best": "A valid subset looks like x, x², x⁴, …, x^k, …, x⁴, x², x. For each value x ≠ 1 follow the chain x → x² → x⁴ … while at least two copies exist (each adds 2 elements); at the end add 1 if a single copy of the next power exists, otherwise drop the last pair's top (−1). Value 1 is special because 1² = 1: use the largest odd count of 1s.",
 "variants": [
  {
   "name": "Follow the chain x, x², x⁴ … with counts",
   "code": "class Solution:\n    def maximumLength(self, nums):\n        cnt = Counter(nums)\n        best = 1\n        if cnt[1]:\n            best = cnt[1] if cnt[1] % 2 else cnt[1] - 1\n        for x in cnt:\n            if x == 1:\n                continue\n            length = 0\n            y = x\n            while cnt.get(y, 0) >= 2:\n                length += 2\n                y *= y\n            length += 1 if cnt.get(y, 0) >= 1 else -1\n            best = max(best, length)\n        return best",
   "time": "O(n log log max)",
   "space": "O(n)",
   "explain": "A valid subset looks like x, x², x⁴, …, x^k, …, x⁴, x², x. For each value x ≠ 1 follow the chain x → x² → x⁴ … while at least two copies exist (each adds 2 elements); at the end add 1 if a single copy of the next power exists, otherwise drop the last pair's top (−1). Value 1 is special because 1² = 1: use the largest odd count of 1s.",
   "frames": []
  }
 ]
};
