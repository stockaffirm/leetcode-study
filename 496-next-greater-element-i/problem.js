window.PROBLEM = {
 "id": "496",
 "title": "Next Greater Element I",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
