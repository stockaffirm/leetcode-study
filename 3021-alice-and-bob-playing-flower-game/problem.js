window.PROBLEM = {
 "id": "3021",
 "title": "Alice and Bob Playing Flower Game",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=3, m=2 → the pairs with odd sum: (1,2),(2,1),(3,2) → 3.",
 "idea": "Alice wins exactly when the total number of flowers x + y is odd. Count the pairs with x in 1…n and y in 1…m and odd sum: (odd x, even y) plus (even x, odd y) = (n+1)//2·(m//2) + (n//2)·((m+1)//2), which equals n·m // 2.",
 "input": "n = 3, m = 2",
 "output": "3",
 "notes": [],
 "best": "Alice wins exactly when the total number of flowers x + y is odd. Count the pairs with x in 1…n and y in 1…m and odd sum: (odd x, even y) plus (even x, odd y) = (n+1)//2·(m//2) + (n//2)·((m+1)//2), which equals n·m // 2.",
 "variants": [
  {
   "name": "Count pairs (x, y) with x + y odd",
   "code": "class Solution:\n    def flowerGame(self, n, m):\n        return n * m // 2",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Alice wins exactly when the total number of flowers x + y is odd. Count the pairs with x in 1…n and y in 1…m and odd sum: (odd x, even y) plus (even x, odd y) = (n+1)//2·(m//2) + (n//2)·((m+1)//2), which equals n·m // 2.",
   "frames": []
  }
 ]
};
