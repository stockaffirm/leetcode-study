window.PROBLEM = {
 "id": "1944",
 "title": "Number of Visible People in a Queue",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "n people stand in a line, facing right; heights[i] is the height of person i (all different). Person i can see person j (j to the right) if everyone standing between them is shorter than BOTH i and j. Return a list where entry i is how many people person i can see. Example: [10,6,8,5,11,9] → [3,1,2,1,1,0] (the first person sees 6, 8 and 11).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan right until blocked",
   "tag": "Brute force",
   "code": "class Solution:\n    def canSeePersonsCount(self, heights):\n        n, ans = len(heights), []\n        for i in range(n):\n            cnt, tallest = 0, 0\n            for j in range(i + 1, n):\n                if heights[j] > tallest:\n                    cnt += 1\n                    tallest = heights[j]\n                if tallest >= heights[i]: break\n            ans.append(cnt)\n        return ans",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For each person walk right counting every new tallest person, stopping when someone as tall as them blocks the view.",
   "frames": [],
   "alt": true
  }
 ]
};
