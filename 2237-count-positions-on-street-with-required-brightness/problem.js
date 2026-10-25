window.PROBLEM = {
 "id": "2237",
 "title": "Count Positions on Street With Required Brightness",
 "level": "Medium",
 "topic": "Intervals",
 "question": "A street has positions 0 to n−1. lights[i] = [position, range] means a lamp lights every position from position − range to position + range (cut off at the ends of the street). requirement[j] is how many lamps must light position j. Return the number of positions whose number of lighting lamps is at least their requirement. Example: n=5, lights [[0,1],[2,1],[3,2]], requirement [0,2,1,4,1] → positions 0, 2, 3 and 4 are bright enough → 4.",
 "why": "A street has positions 0..n−1, each needing some brightness (how many lamps must light it). How many positions get enough light?",
 "idea": "Add +1 where each lamp's lit range starts and −1 just after it ends (a difference array). A running sum then gives every position's brightness; compare with the requirement.",
 "input": "n=5, lights [[0,1],[2,1],[3,2]], requirement [0,2,1,4,1]",
 "output": "4",
 "notes": [],
 "best": "Add +1 where each lamp's lit range starts and −1 just after it ends (a difference array). A running sum then gives every position's brightness; compare with the requirement.",
 "variants": [
  {
   "name": "Difference array of light ranges",
   "code": "class Solution:\n    def meetRequirement(self, n, lights, requirement):\n        diff = [0] * (n + 1)\n        for pos, rng in lights:\n            diff[max(0, pos - rng)] += 1\n            diff[min(n - 1, pos + rng) + 1] -= 1\n        bright = count = 0\n        for i in range(n):\n            bright += diff[i]\n            if bright >= requirement[i]: count += 1\n        return count",
   "time": "O(n + lights)",
   "space": "O(n)",
   "explain": "Add +1 where each lamp's lit range starts and −1 just after it ends (a difference array). A running sum then gives every position's brightness; compare with the requirement.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count lamps for every position",
   "tag": "Brute force",
   "code": "class Solution:\n    def meetRequirement(self, n, lights, requirement):\n        count = 0\n        for i in range(n):\n            b = sum(1 for pos, rng in lights if pos - rng <= i <= pos + rng)\n            if b >= requirement[i]: count += 1\n        return count",
   "time": "O(n·lights)",
   "space": "O(1)",
   "explain": "For each position count the lamps that reach it.",
   "frames": [],
   "alt": true
  }
 ]
};
