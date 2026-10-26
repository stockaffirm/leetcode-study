window.PROBLEM = {
 "id": "496",
 "title": "Next Greater Element I",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "nums1 is a subset of nums2. For each number x in nums1, find its position in nums2 and return the first bigger number to its right in nums2, or −1 if there is none. Example: nums1 [4,1,2], nums2 [1,3,4,2] → [−1,3,−1].",
 "why": "For each number of nums1 (a subset of nums2), find the first bigger number to its right in nums2, or −1.",
 "idea": "Scan nums2 once with a decreasing stack: when a bigger number arrives, it is the answer for every smaller number popped. Store answers in a dictionary.",
 "input": "nums1 [4,1,2], nums2 [1,3,4,2]",
 "output": "[-1,3,-1]",
 "notes": [],
 "best": "Scan nums2 once with a decreasing stack: when a bigger number arrives, it is the answer for every smaller number popped. Store answers in a dictionary.",
 "variants": [
  {
   "name": "Monotonic stack + dictionary",
   "code": "class Solution:\n    def nextGreaterElement(self, nums1, nums2):\n        nxt, st = {}, []\n        for x in nums2:\n            while st and st[-1] < x: nxt[st.pop()] = x\n            st.append(x)\n        return [nxt.get(x, -1) for x in nums1]",
   "time": "O(n + m)",
   "space": "O(m)",
   "explain": "Scan nums2 once with a decreasing stack: when a bigger number arrives, it is the answer for every smaller number popped. Store answers in a dictionary.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan to the right for each number",
   "tag": "Brute force",
   "code": "class Solution:\n    def nextGreaterElement(self, nums1, nums2):\n        res = []\n        for x in nums1:\n            i = nums2.index(x)\n            res.append(next((y for y in nums2[i + 1:] if y > x), -1))\n        return res",
   "time": "O(n·m)",
   "space": "O(1)",
   "explain": "Find the number in nums2 and look for the first bigger one after it.",
   "frames": [],
   "alt": true
  }
 ]
};
