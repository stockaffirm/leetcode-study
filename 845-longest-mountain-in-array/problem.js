window.PROBLEM = {
 "id": "845",
 "title": "Longest Mountain in Array",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
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
   "frames": []
  }
 ]
};
