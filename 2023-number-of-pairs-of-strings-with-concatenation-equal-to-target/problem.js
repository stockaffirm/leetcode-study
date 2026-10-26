window.PROBLEM = {
 "id": "2023",
 "title": "Number of Pairs of Strings With Concatenation Equal to Target",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Count ordered pairs (i, j), i ≠ j, whose strings glued together spell the target.",
 "idea": "Split the target at every position into (prefix, suffix) and count how many list items equal each. Multiply the counts; if prefix = suffix use cnt × (cnt − 1) so an item is not paired with itself.",
 "input": "[\"777\", \"7\", \"77\", \"77\"], target \"7777\"",
 "output": "4",
 "notes": [],
 "best": "Split the target at every position into (prefix, suffix) and count how many list items equal each. Multiply the counts; if prefix = suffix use cnt × (cnt − 1) so an item is not paired with itself.",
 "variants": [
  {
   "name": "Split target, multiply counts",
   "code": "class Solution:\n    def numOfPairs(self, nums, target):\n        cnt = Counter(nums)\n        total = 0\n        for i in range(1, len(target)):\n            p, s = target[:i], target[i:]\n            if p == s: total += cnt[p] * (cnt[p] - 1)\n            else: total += cnt[p] * cnt[s]\n        return total",
   "time": "O(n + L²)",
   "space": "O(n)",
   "explain": "Split the target at every position into (prefix, suffix) and count how many list items equal each. Multiply the counts; if prefix = suffix use cnt × (cnt − 1) so an item is not paired with itself.",
   "frames": []
  }
 ]
};
