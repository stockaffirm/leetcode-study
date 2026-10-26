window.PROBLEM = {
 "id": "904",
 "title": "Fruit Into Baskets",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
