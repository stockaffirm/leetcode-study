window.PROBLEM = {
 "id": "1053",
 "title": "Previous Permutation With One Swap",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Given a list of positive whole numbers arr, make exactly one swap of two numbers (they may be any two positions) so that the result is the LARGEST list that is still SMALLER than the original (compared like words in a dictionary: look at the first position where they differ). If no swap can make the list smaller, return the original. Example: [1,9,4,6,7] → swap 9 and 7 → [1,7,4,6,9].",
 "why": "Make the list as large as possible but still SMALLER than it is now, using exactly one swap. [1,9,4,6,7] → [1,7,4,6,9].",
 "idea": "Scan from the right for the first position i that is bigger than its right neighbour — that is where the list can get smaller. Swap it with the largest smaller value to its right (the leftmost one if equal).",
 "input": "[1, 9, 4, 6, 7]",
 "output": "[1, 7, 4, 6, 9]",
 "notes": [],
 "best": "Scan from the right for the first position i that is bigger than its right neighbour — that is where the list can get smaller. Swap it with the largest smaller value to its right (the leftmost one if equal).",
 "variants": [
  {
   "name": "Find the dip, swap with the best smaller value",
   "code": "class Solution:\n    def prevPermOpt1(self, arr):\n        n = len(arr)\n        i = n - 2\n        while i >= 0 and arr[i] <= arr[i + 1]: i -= 1\n        if i < 0: return arr\n        j = n - 1\n        while arr[j] >= arr[i]: j -= 1\n        while arr[j - 1] == arr[j]: j -= 1\n        arr[i], arr[j] = arr[j], arr[i]\n        return arr",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan from the right for the first position i that is bigger than its right neighbour — that is where the list can get smaller. Swap it with the largest smaller value to its right (the leftmost one if equal).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every swap",
   "tag": "Brute force",
   "code": "class Solution:\n    def prevPermOpt1(self, arr):\n        best = arr[:]\n        n = len(arr)\n        for i in range(n):\n            for j in range(i + 1, n):\n                t = arr[:]\n                t[i], t[j] = t[j], t[i]\n                if t < arr and (best == arr or t > best): best = t\n        return best",
   "time": "O(n³)",
   "space": "O(n)",
   "explain": "Try every pair swap and keep the largest result that is still smaller than the original.",
   "frames": [],
   "alt": true
  }
 ]
};
