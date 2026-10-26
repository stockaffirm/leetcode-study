window.PROBLEM = {
 "id": "768",
 "title": "Max Chunks To Make Sorted II",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "Split arr into the maximum number of contiguous chunks, sort each chunk on its own, and join them: the result must equal the fully sorted array. Return the maximum number of chunks (values may repeat). Example: [2,1,3,4,4] → 4.",
 "why": "[2,1,3,4,4]: chunks [2,1], [3], [4], [4] → 4.",
 "idea": "Keep a stack with the maximum of each chunk so far (increasing). A new number smaller than the top must merge with those chunks: pop them and push their overall maximum. The stack size at the end is the number of chunks.",
 "input": "arr = [2,1,3,4,4]",
 "output": "4",
 "notes": [],
 "best": "Keep a stack with the maximum of each chunk so far (increasing). A new number smaller than the top must merge with those chunks: pop them and push their overall maximum. The stack size at the end is the number of chunks.",
 "variants": [
  {
   "name": "Stack of chunk maximums",
   "code": "class Solution:\n    def maxChunksToSorted(self, arr):\n        st = []\n        for x in arr:\n            m = x\n            while st and st[-1] > x:\n                m = max(m, st.pop())\n            st.append(m)\n        return len(st)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a stack with the maximum of each chunk so far (increasing). A new number smaller than the top must merge with those chunks: pop them and push their overall maximum. The stack size at the end is the number of chunks.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix sums against the sorted array",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxChunksToSorted(self, arr):\n        s = sorted(arr)\n        a = b = chunks = 0\n        for x, y in zip(arr, s):\n            a += x\n            b += y\n            if a == b:\n                chunks += 1\n        return chunks",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Cut after position i when the first i+1 numbers add up to the same as the i+1 smallest numbers (then they are exactly those numbers).",
   "frames": [],
   "alt": true
  }
 ]
};
