window.PROBLEM = {
 "id": "2134",
 "title": "Minimum Swaps to Group All 1's Together II",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "[0,1,0,1,1,0,0]: three ones; the best circular window of length 3 holds 2 ones → 1 swap.",
 "idea": "Let w be the number of 1s. The ones must end up in some window of length w on the circular array; the swaps needed equal the zeros inside that window. Slide a window over nums + nums and take the minimum zero count.",
 "input": "nums = [0,1,0,1,1,0,0]",
 "output": "1",
 "notes": [],
 "best": "Let w be the number of 1s. The ones must end up in some window of length w on the circular array; the swaps needed equal the zeros inside that window. Slide a window over nums + nums and take the minimum zero count.",
 "variants": [
  {
   "name": "Window of size = number of ones on a circle",
   "code": "class Solution:\n    def minSwaps(self, nums):\n        w = sum(nums)\n        if w in (0, len(nums)):\n            return 0\n        t = nums + nums\n        zeros = t[:w].count(0)\n        best = zeros\n        for i in range(w, len(nums) + w):\n            zeros += (t[i] == 0) - (t[i - w] == 0)\n            best = min(best, zeros)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Let w be the number of 1s. The ones must end up in some window of length w on the circular array; the swaps needed equal the zeros inside that window. Slide a window over nums + nums and take the minimum zero count.",
   "frames": []
  }
 ]
};
