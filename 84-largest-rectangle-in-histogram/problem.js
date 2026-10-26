window.PROBLEM = {
 "id": "84",
 "title": "Largest Rectangle in Histogram",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "Bars of different heights stand side by side (each width 1). What is the area of the largest rectangle that fits inside them?",
 "idea": "Keep a stack of bars with increasing heights. When a lower bar arrives, pop taller bars: each popped bar is the shortest bar of a rectangle that stretches from the bar below it on the stack to the current position.",
 "input": "[2, 1, 5, 6, 2, 3]",
 "output": "10",
 "notes": [],
 "best": "Keep a stack of bars with increasing heights. When a lower bar arrives, pop taller bars: each popped bar is the shortest bar of a rectangle that stretches from the bar below it on the stack to the current position.",
 "variants": [
  {
   "name": "Monotonic stack of rising bars",
   "code": "class Solution:\n    def largestRectangleArea(self, heights):\n        heights = heights + [0]\n        st, best = [], 0\n        for i, h in enumerate(heights):\n            while st and heights[st[-1]] > h:\n                top = heights[st.pop()]\n                left = st[-1] if st else -1\n                best = max(best, top * (i - left - 1))\n            st.append(i)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a stack of bars with increasing heights. When a lower bar arrives, pop taller bars: each popped bar is the shortest bar of a rectangle that stretches from the bar below it on the stack to the current position.",
   "frames": []
  }
 ]
};
