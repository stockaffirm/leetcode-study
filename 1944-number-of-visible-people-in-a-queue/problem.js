window.PROBLEM = {
 "id": "1944",
 "title": "Number of Visible People in a Queue",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "People stand in a line looking right. A person sees someone if everyone between them is shorter than both. How many people does each person see?",
 "idea": "Go right to left with a stack of heights. Everyone shorter that you pop is someone you see; the first taller-or-equal person left on the stack is one more you see.",
 "input": "[10, 6, 8, 5, 11, 9]",
 "output": "[3, 1, 2, 1, 1, 0]",
 "notes": [],
 "best": "Go right to left with a stack of heights. Everyone shorter that you pop is someone you see; the first taller-or-equal person left on the stack is one more you see.",
 "variants": [
  {
   "name": "Monotonic stack from the right",
   "code": "class Solution:\n    def canSeePersonsCount(self, heights):\n        n = len(heights)\n        ans, st = [0] * n, []\n        for i in range(n - 1, -1, -1):\n            while st and st[-1] < heights[i]:\n                st.pop()\n                ans[i] += 1\n            if st: ans[i] += 1\n            st.append(heights[i])\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Go right to left with a stack of heights. Everyone shorter that you pop is someone you see; the first taller-or-equal person left on the stack is one more you see.",
   "frames": []
  }
 ]
};
