window.PROBLEM = {
 "id": "1040",
 "title": "Moving Stones Until Consecutive II",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "Stones at 4, 7, 9: the minimum is 1 move (4 → 8 gives 7, 8, 9), the maximum is 2.",
 "idea": "Maximum: skip the first or the last gap — max(last − second − (n−2), second-last − first − (n−2)). Minimum: slide a window of n positions over the sorted stones; the stones outside must move, so the cost is n − (stones inside). Special case: if n−1 stones already sit next to each other (span n−2) and one stone is far away, that needs 2 moves, not 1.",
 "input": "stones = [7,4,9]",
 "output": "[1, 2]",
 "notes": [],
 "best": "Maximum: skip the first or the last gap — max(last − second − (n−2), second-last − first − (n−2)). Minimum: slide a window of n positions over the sorted stones; the stones outside must move, so the cost is n − (stones inside). Special case: if n−1 stones already sit next to each other (span n−2) and one stone is far away, that needs 2 moves, not 1.",
 "variants": [
  {
   "name": "Sliding window of n positions",
   "code": "class Solution:\n    def numMovesStonesII(self, stones):\n        stones.sort()\n        n = len(stones)\n        high = max(stones[-1] - stones[1] - n + 2, stones[-2] - stones[0] - n + 2)\n        low = n\n        j = 0\n        for i in range(n):\n            while stones[i] - stones[j] >= n:\n                j += 1\n            if i - j + 1 == n - 1 and stones[i] - stones[j] == n - 2:\n                low = min(low, 2)\n            else:\n                low = min(low, n - (i - j + 1))\n        return [low, high]",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Maximum: skip the first or the last gap — max(last − second − (n−2), second-last − first − (n−2)). Minimum: slide a window of n positions over the sorted stones; the stones outside must move, so the cost is n − (stones inside). Special case: if n−1 stones already sit next to each other (span n−2) and one stone is far away, that needs 2 moves, not 1.",
   "frames": []
  }
 ]
};
