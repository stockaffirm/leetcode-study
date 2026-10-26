window.PROBLEM = {
 "id": "941",
 "title": "Valid Mountain Array",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "[0,3,2,1] is a mountain; [3,5,5] is not (flat step).",
 "idea": "Walk up while values strictly increase, then walk down while they strictly decrease. It is a mountain if the peak is neither the first nor the last position and the walk reached the end.",
 "input": "arr = [0,3,2,1]",
 "output": "true",
 "notes": [],
 "best": "Walk up while values strictly increase, then walk down while they strictly decrease. It is a mountain if the peak is neither the first nor the last position and the walk reached the end.",
 "variants": [
  {
   "name": "Climb, then descend, ending at the end",
   "code": "class Solution:\n    def validMountainArray(self, arr):\n        n = len(arr)\n        i = 0\n        while i + 1 < n and arr[i] < arr[i + 1]:\n            i += 1\n        if i == 0 or i == n - 1:\n            return False\n        while i + 1 < n and arr[i] > arr[i + 1]:\n            i += 1\n        return i == n - 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk up while values strictly increase, then walk down while they strictly decrease. It is a mountain if the peak is neither the first nor the last position and the walk reached the end.",
   "frames": []
  }
 ]
};
