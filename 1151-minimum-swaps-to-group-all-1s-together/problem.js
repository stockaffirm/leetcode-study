window.PROBLEM = {
 "id": "1151",
 "title": "Minimum Swaps to Group All 1's Together",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Return the minimum number of swaps (any two positions) needed to group all the 1s of a binary array together. Example: [1,0,1,0,1] → 1.",
 "why": "[1,0,1,0,1] has three 1s; the best window of length 3 has one 0 → 1 swap.",
 "idea": "All 1s must end in a window whose length equals the total number of ones. Slide such a window across the array; the swaps needed equal the zeros inside it. Return the minimum.",
 "input": "data = [1,0,1,0,1]",
 "output": "1",
 "notes": [],
 "best": "All 1s must end in a window whose length equals the total number of ones. Slide such a window across the array; the swaps needed equal the zeros inside it. Return the minimum.",
 "variants": [
  {
   "name": "Window of size = number of ones, fewest zeros inside",
   "code": "class Solution:\n    def minSwaps(self, data):\n        w = sum(data)\n        if w == 0:\n            return 0\n        zeros = data[:w].count(0)\n        best = zeros\n        for i in range(w, len(data)):\n            zeros += (data[i] == 0) - (data[i - w] == 0)\n            best = min(best, zeros)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "All 1s must end in a window whose length equals the total number of ones. Slide such a window across the array; the swaps needed equal the zeros inside it. Return the minimum.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix sums of ones",
   "tag": "Alternative",
   "code": "class Solution:\n    def minSwaps(self, data):\n        w = sum(data)\n        pre = [0] + list(accumulate(data))\n        best = w\n        for i in range(len(data) - w + 1):\n            best = min(best, w - (pre[i + w] - pre[i]))\n        return best if w else 0",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "With prefix counts of ones, the ones inside each window of size w come from two lookups.",
   "frames": [],
   "alt": true
  }
 ]
};
