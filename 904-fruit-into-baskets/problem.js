window.PROBLEM = {
 "id": "904",
 "title": "Fruit Into Baskets",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Fruit trees stand in a row; fruits[i] is the kind of fruit on tree i. You walk right from any tree you like, picking one fruit from each tree. You have two baskets and each basket holds only ONE kind of fruit (any amount). You must stop when you reach a tree whose fruit fits in neither basket. Return the largest number of fruits you can pick. Example: [1,2,3,2,2] → start at the second tree: 2,3,2,2 uses kinds 2 and 3 → 4.",
 "why": "Pick fruit from consecutive trees but only two kinds fit in your baskets. What is the longest run you can pick?",
 "idea": "This is 'longest stretch with at most 2 different values'. Grow the window, count kinds, and shrink from the left when a third kind appears.",
 "input": "[1, 2, 3, 2, 2]",
 "output": "4",
 "notes": [],
 "best": "This is 'longest stretch with at most 2 different values'. Grow the window, count kinds, and shrink from the left when a third kind appears.",
 "variants": [
  {
   "name": "Window with at most two kinds",
   "code": "class Solution:\n    def totalFruit(self, fruits):\n        cnt, left, best = {}, 0, 0\n        for right, f in enumerate(fruits):\n            cnt[f] = cnt.get(f, 0) + 1\n            while len(cnt) > 2:\n                cnt[fruits[left]] -= 1\n                if cnt[fruits[left]] == 0: del cnt[fruits[left]]\n                left += 1\n            best = max(best, right - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "This is 'longest stretch with at most 2 different values'. Grow the window, count kinds, and shrink from the left when a third kind appears.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Track the last two fruit types",
   "tag": "Alternative",
   "code": "class Solution:\n    def totalFruit(self, fruits):\n        a = b = -1\n        cur = cur_b = best = 0\n        for f in fruits:\n            cur = cur + 1 if f in (a, b) else cur_b + 1\n            cur_b = cur_b + 1 if f == b else 1\n            if f != b: a, b = b, f\n            best = max(best, cur)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "No dictionary: remember the two latest types and how long the newest type has repeated.",
   "frames": [],
   "alt": true
  }
 ]
};
