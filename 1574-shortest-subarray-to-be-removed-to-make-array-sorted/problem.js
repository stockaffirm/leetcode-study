window.PROBLEM = {
 "id": "1574",
 "title": "Shortest Subarray to be Removed to Make Array Sorted",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "[1,2,3,10,4,2,3,5]: keep [1,2,3] and [3,5] → remove 3 elements.",
 "idea": "Find the longest non-decreasing prefix and the longest non-decreasing suffix. Remove everything between, or keep part of both: with two pointers, for every prefix element find the first suffix element that is ≥ it; the removed middle shrinks as the prefix grows.",
 "input": "arr = [1,2,3,10,4,2,3,5]",
 "output": "3",
 "notes": [],
 "best": "Find the longest non-decreasing prefix and the longest non-decreasing suffix. Remove everything between, or keep part of both: with two pointers, for every prefix element find the first suffix element that is ≥ it; the removed middle shrinks as the prefix grows.",
 "variants": [
  {
   "name": "Join the sorted prefix with the sorted suffix",
   "code": "class Solution:\n    def findLengthOfShortestSubarray(self, arr):\n        n = len(arr)\n        r = n - 1\n        while r > 0 and arr[r - 1] <= arr[r]:\n            r -= 1\n        if r == 0:\n            return 0\n        best = r\n        for l in range(n):\n            if l > 0 and arr[l] < arr[l - 1]:\n                break\n            while r < n and arr[r] < arr[l]:\n                r += 1\n            best = min(best, r - l - 1)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Find the longest non-decreasing prefix and the longest non-decreasing suffix. Remove everything between, or keep part of both: with two pointers, for every prefix element find the first suffix element that is ≥ it; the removed middle shrinks as the prefix grows.",
   "frames": []
  }
 ]
};
