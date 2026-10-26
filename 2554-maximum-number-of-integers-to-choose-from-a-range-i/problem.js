window.PROBLEM = {
 "id": "2554",
 "title": "Maximum Number of Integers to Choose From a Range I",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "banned [1,6,5], n=5, maxSum=6: take 2 and 3 (sum 5); adding 4 would reach 9 → 2.",
 "idea": "To pick as many numbers as possible with a limited sum, pick the smallest ones. Walk 1 … n, skip banned numbers, and stop when the next number would push the sum over maxSum.",
 "input": "banned = [1,6,5], n = 5, maxSum = 6",
 "output": "2",
 "notes": [],
 "best": "To pick as many numbers as possible with a limited sum, pick the smallest ones. Walk 1 … n, skip banned numbers, and stop when the next number would push the sum over maxSum.",
 "variants": [
  {
   "name": "Take the smallest allowed numbers",
   "code": "class Solution:\n    def maxCount(self, banned, n, maxSum):\n        bad = set(banned)\n        total = count = 0\n        for v in range(1, n + 1):\n            if v in bad:\n                continue\n            if total + v > maxSum:\n                break\n            total += v\n            count += 1\n        return count",
   "time": "O(n)",
   "space": "O(b)",
   "explain": "To pick as many numbers as possible with a limited sum, pick the smallest ones. Walk 1 … n, skip banned numbers, and stop when the next number would push the sum over maxSum.",
   "frames": []
  }
 ]
};
