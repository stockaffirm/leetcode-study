window.PROBLEM = {
 "id": "2189",
 "title": "Number of Ways to Build House of Cards",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You build a house of cards from n cards. Triangles are made by leaning two cards together; a horizontal card lies between each pair of neighbouring triangles in a row, and every triangle on a higher row stands on a horizontal card of the row below, so each higher row has FEWER triangles than the row below. A row of k triangles uses 3k − 1 cards. Return the number of different houses that use exactly n cards (two houses are different if their rows have different numbers of triangles). Example: n=16 → rows (5,1) and (4,2) → 2; n=4 → 0.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "0/1 knapsack over row sizes",
   "tag": "Alternative",
   "code": "class Solution:\n    def houseOfCards(self, n):\n        ways = [1] + [0] * n\n        for k in range(1, n // 2 + 2):\n            cost = 3 * k - 1\n            for c in range(n, cost - 1, -1): ways[c] += ways[c - cost]\n        return ways[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Each row size k can be used at most once (rows strictly shrink): count subsets of row costs 3k − 1 that add up to n.",
   "frames": [],
   "alt": true
  }
 ]
};
