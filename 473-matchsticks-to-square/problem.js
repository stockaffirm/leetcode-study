window.PROBLEM = {
 "id": "473",
 "title": "Matchsticks to Square",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "[1,1,2,2,2]: sides {2}, {2}, {2}, {1,1} → every side is 2... total 8 = 4×2 → true.",
 "idea": "The total length must be divisible by 4. Sort sticks descending and try to place each into one of four sides without exceeding the target side length, skipping sides with the same current length (symmetry). Success if all sticks are placed.",
 "input": "matchsticks = [1,1,2,2,2]",
 "output": "true",
 "notes": [],
 "best": "The total length must be divisible by 4. Sort sticks descending and try to place each into one of four sides without exceeding the target side length, skipping sides with the same current length (symmetry). Success if all sticks are placed.",
 "variants": [
  {
   "name": "Backtrack sticks into four sides",
   "code": "class Solution:\n    def makesquare(self, matchsticks):\n        total = sum(matchsticks)\n        if total % 4:\n            return False\n        side = total // 4\n        sticks = sorted(matchsticks, reverse=True)\n        if sticks[0] > side:\n            return False\n        sides = [0] * 4\n        def go(i):\n            if i == len(sticks):\n                return True\n            seen = set()\n            for s in range(4):\n                if sides[s] in seen or sides[s] + sticks[i] > side:\n                    continue\n                seen.add(sides[s])\n                sides[s] += sticks[i]\n                if go(i + 1):\n                    return True\n                sides[s] -= sticks[i]\n            return False\n        return go(0)",
   "time": "O(4ⁿ) with pruning",
   "space": "O(n)",
   "explain": "The total length must be divisible by 4. Sort sticks descending and try to place each into one of four sides without exceeding the target side length, skipping sides with the same current length (symmetry). Success if all sticks are placed.",
   "frames": []
  }
 ]
};
