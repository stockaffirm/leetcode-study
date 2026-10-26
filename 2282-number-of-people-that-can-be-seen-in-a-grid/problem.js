window.PROBLEM = {
 "id": "2282",
 "title": "Number of People That Can Be Seen in a Grid",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "People stand in a grid with heights. A person sees someone to the right (same row) or below (same column) if everybody in between is shorter than both. Count, for every person, the people they can see.",
 "idea": "Along each row (and each column) scan from the far end with a stack of heights: pop everybody shorter than the current person (each popped one is seen), then if the stack is not empty, the person on top is seen too.",
 "input": "[[3,1,4,2,5]]",
 "output": "[[2,1,2,1,0]]",
 "notes": [],
 "best": "Along each row (and each column) scan from the far end with a stack of heights: pop everybody shorter than the current person (each popped one is seen), then if the stack is not empty, the person on top is seen too.",
 "variants": [
  {
   "name": "Monotonic stack along rows and columns",
   "code": "class Solution:\n    def seePeople(self, heights):\n        m, n = len(heights), len(heights[0])\n        ans = [[0] * n for _ in range(m)]\n        for i in range(m):\n            st = []\n            for j in range(n - 1, -1, -1):\n                h = heights[i][j]\n                while st and st[-1] < h:\n                    st.pop()\n                    ans[i][j] += 1\n                if st: ans[i][j] += 1\n                if not st or st[-1] != h: st.append(h)\n        for j in range(n):\n            st = []\n            for i in range(m - 1, -1, -1):\n                h = heights[i][j]\n                while st and st[-1] < h:\n                    st.pop()\n                    ans[i][j] += 1\n                if st: ans[i][j] += 1\n                if not st or st[-1] != h: st.append(h)\n        return ans",
   "time": "O(m·n)",
   "space": "O(m + n)",
   "explain": "Along each row (and each column) scan from the far end with a stack of heights: pop everybody shorter than the current person (each popped one is seen), then if the stack is not empty, the person on top is seen too.",
   "frames": []
  }
 ]
};
