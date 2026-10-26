window.PROBLEM = {
 "id": "1053",
 "title": "Previous Permutation With One Swap",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
