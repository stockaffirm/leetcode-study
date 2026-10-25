window.PROBLEM = {
 "id": "1539",
 "title": "Kth Missing Positive Number",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "A sorted array holds positive integers; the positive numbers that are missing from it are 1, 2, 3 … without those in the array. Return the k-th missing positive number. Example: [2,3,4,7,11], k=5 → 9 (the missing ones are 1, 5, 6, 8, 9).",
 "why": "[2,3,4,7,11]: the missing numbers are 1, 5, 6, 8, 9, 10 …; the 5th missing is 9.",
 "idea": "At index i the number of missing positives before arr[i] is arr[i] − (i + 1), which only grows. Binary search the first index where that is at least k; the answer is then lo + k.",
 "input": "arr = [2,3,4,7,11], k = 5",
 "output": "9",
 "notes": [],
 "best": "At index i the number of missing positives before arr[i] is arr[i] − (i + 1), which only grows. Binary search the first index where that is at least k; the answer is then lo + k.",
 "variants": [
  {
   "name": "Binary search on missing count",
   "code": "class Solution:\n    def findKthPositive(self, arr, k):\n        lo, hi = 0, len(arr)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if arr[mid] - (mid + 1) < k:\n                lo = mid + 1\n            else:\n                hi = mid\n        return lo + k",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "At index i the number of missing positives before arr[i] is arr[i] − (i + 1), which only grows. Binary search the first index where that is at least k; the answer is then lo + k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk the numbers 1, 2, 3 …",
   "tag": "Brute force",
   "code": "class Solution:\n    def findKthPositive(self, arr, k):\n        cur = i = missing = 0\n        while True:\n            cur += 1\n            if i < len(arr) and arr[i] == cur:\n                i += 1\n            else:\n                missing += 1\n                if missing == k:\n                    return cur",
   "time": "O(n + k)",
   "space": "O(1)",
   "explain": "Count up and check each number against the array until the k-th missing one.",
   "frames": [],
   "alt": true
  }
 ]
};
