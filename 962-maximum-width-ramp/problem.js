window.PROBLEM = {
 "id": "962",
 "title": "Maximum Width Ramp",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "[6,0,8,2,1,5]: ramp from index 1 (value 0) to index 5 (value 5) has width 4.",
 "idea": "A ramp is i < j with nums[i] ≤ nums[j]. Candidate left ends are the positions of strictly new prefix minimums (a decreasing stack). Scan j from the right and pop every candidate i with nums[i] ≤ nums[j], recording j − i; the earliest valid i gives the widest ramp for that j.",
 "input": "nums = [6,0,8,2,1,5]",
 "output": "4",
 "notes": [],
 "best": "A ramp is i < j with nums[i] ≤ nums[j]. Candidate left ends are the positions of strictly new prefix minimums (a decreasing stack). Scan j from the right and pop every candidate i with nums[i] ≤ nums[j], recording j − i; the earliest valid i gives the widest ramp for that j.",
 "variants": [
  {
   "name": "Decreasing stack of left ends, scan from the right",
   "code": "class Solution:\n    def maxWidthRamp(self, nums):\n        st = []\n        for i, x in enumerate(nums):\n            if not st or x < nums[st[-1]]:\n                st.append(i)\n        best = 0\n        for j in range(len(nums) - 1, -1, -1):\n            while st and nums[st[-1]] <= nums[j]:\n                best = max(best, j - st.pop())\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A ramp is i < j with nums[i] ≤ nums[j]. Candidate left ends are the positions of strictly new prefix minimums (a decreasing stack). Scan j from the right and pop every candidate i with nums[i] ≤ nums[j], recording j − i; the earliest valid i gives the widest ramp for that j.",
   "frames": []
  }
 ]
};
