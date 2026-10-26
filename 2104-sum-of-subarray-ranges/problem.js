window.PROBLEM = {
 "id": "2104",
 "title": "Sum of Subarray Ranges",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "[1,2,3]: ranges 0,0,0,1,1,2 → 4.",
 "idea": "The range of a subarray is max − min, so the answer is (sum of all subarray maxima) − (sum of all subarray minima). Each is computed in O(n) with a monotonic stack: an element is the maximum of (left span × right span) subarrays.",
 "input": "nums = [1,2,3]",
 "output": "4",
 "notes": [],
 "best": "The range of a subarray is max − min, so the answer is (sum of all subarray maxima) − (sum of all subarray minima). Each is computed in O(n) with a monotonic stack: an element is the maximum of (left span × right span) subarrays.",
 "variants": [
  {
   "name": "Sum of subarray maxima minus sum of subarray minima",
   "code": "class Solution:\n    def subArrayRanges(self, nums):\n        n = len(nums)\n        def total(less):\n            res = 0\n            st = []\n            for i in range(n + 1):\n                while st and (i == n or (nums[st[-1]] < nums[i] if less else nums[st[-1]] > nums[i])):\n                    mid = st.pop()\n                    left = st[-1] if st else -1\n                    res += nums[mid] * (mid - left) * (i - mid)\n                st.append(i)\n            return res\n        return total(True) - total(False)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The range of a subarray is max − min, so the answer is (sum of all subarray maxima) − (sum of all subarray minima). Each is computed in O(n) with a monotonic stack: an element is the maximum of (left span × right span) subarrays.",
   "frames": []
  }
 ]
};
