window.PROBLEM = {
 "id": "768",
 "title": "Max Chunks To Make Sorted II",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
