window.PROBLEM = {
 "id": "845",
 "title": "Longest Mountain in Array",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "A mountain subarray has length ≥ 3, strictly increases to a peak and then strictly decreases. Return the length of the longest mountain in arr, or 0. Example: [2,1,4,7,3,2,5] → 5.",
 "why": "[2,1,4,7,3,2,5]: the mountain 1,4,7,3,2 has length 5.",
 "idea": "Scan left to right. From a start index climb while values increase; if you climbed and then can descend, you have a mountain whose length is the climb plus the descent. Continue scanning from the end of the descent.",
 "input": "arr = [2,1,4,7,3,2,5]",
 "output": "5",
 "notes": [],
 "best": "Scan left to right. From a start index climb while values increase; if you climbed and then can descend, you have a mountain whose length is the climb plus the descent. Continue scanning from the end of the descent.",
 "variants": [
  {
   "name": "Walk up, then down",
   "code": "class Solution:\n    def longestMountain(self, arr):\n        n = len(arr)\n        res = 0\n        i = 1\n        while i < n:\n            base = i - 1\n            if arr[i] > arr[i - 1]:\n                while i < n and arr[i] > arr[i - 1]:\n                    i += 1\n                if i < n and arr[i] < arr[i - 1]:\n                    while i < n and arr[i] < arr[i - 1]:\n                        i += 1\n                    res = max(res, i - base)\n            else:\n                i += 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan left to right. From a start index climb while values increase; if you climbed and then can descend, you have a mountain whose length is the climb plus the descent. Continue scanning from the end of the descent.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Up and down run lengths",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestMountain(self, arr):\n        n = len(arr)\n        up = [0] * n\n        down = [0] * n\n        for i in range(1, n):\n            if arr[i] > arr[i - 1]:\n                up[i] = up[i - 1] + 1\n        for i in range(n - 2, -1, -1):\n            if arr[i] > arr[i + 1]:\n                down[i] = down[i + 1] + 1\n        return max([up[i] + down[i] + 1 for i in range(n) if up[i] and down[i]], default=0)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "up[i] = length of the rising run ending at i, down[i] = length of the falling run starting at i; a peak with both > 0 gives a mountain.",
   "frames": [],
   "alt": true
  }
 ]
};
