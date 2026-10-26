window.PROBLEM = {
 "id": "2282",
 "title": "Number of People That Can Be Seen in a Grid",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "People stand in a grid; heights[i][j] is a person's height. A person can see another person to their right in the same row or below them in the same column if everybody in between is shorter than BOTH of them. For every person return how many people they can see. Example: [[3,1,4,2,5]] → [[2,1,2,1,0]].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan from every person",
   "tag": "Brute force",
   "code": "class Solution:\n    def seePeople(self, heights):\n        m, n = len(heights), len(heights[0])\n        ans = [[0] * n for _ in range(m)]\n        for i in range(m):\n            for j in range(n):\n                h = heights[i][j]\n                mx = 0\n                for c in range(j + 1, n):\n                    if mx >= h: break\n                    if min(h, heights[i][c]) > mx: ans[i][j] += 1\n                    mx = max(mx, heights[i][c])\n                mx = 0\n                for r in range(i + 1, m):\n                    if mx >= h: break\n                    if min(h, heights[r][j]) > mx: ans[i][j] += 1\n                    mx = max(mx, heights[r][j])\n        return ans",
   "time": "O(m·n·(m+n))",
   "space": "O(1)",
   "explain": "For each person walk to the right and down, tracking the tallest person passed.",
   "frames": [],
   "alt": true
  }
 ]
};
