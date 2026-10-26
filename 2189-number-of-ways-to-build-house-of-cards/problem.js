window.PROBLEM = {
 "id": "2189",
 "title": "Number of Ways to Build House of Cards",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Build a house of cards from exactly n cards: each row of k triangles uses 3k − 1 cards and the row above must have fewer triangles. How many different houses?",
 "idea": "A house is a strictly decreasing list of row sizes k1 > k2 > … whose card costs 3k − 1 add up to n. Count them with recursion: choose the next (smaller) row size and recurse on the leftover cards.",
 "input": "n = 16",
 "output": "2",
 "notes": [],
 "best": "A house is a strictly decreasing list of row sizes k1 > k2 > … whose card costs 3k − 1 add up to n. Count them with recursion: choose the next (smaller) row size and recurse on the leftover cards.",
 "variants": [
  {
   "name": "Recursion over decreasing rows",
   "code": "class Solution:\n    def houseOfCards(self, n):\n        @lru_cache(None)\n        def go(left, limit):\n            if left == 0: return 1\n            total = 0\n            for k in range(1, limit):\n                cost = 3 * k - 1\n                if cost > left: break\n                total += go(left - cost, k)\n            return total\n        return go(n, n + 1)",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "A house is a strictly decreasing list of row sizes k1 > k2 > … whose card costs 3k − 1 add up to n. Count them with recursion: choose the next (smaller) row size and recurse on the leftover cards.",
   "frames": []
  }
 ]
};
