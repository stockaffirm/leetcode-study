window.PROBLEM = {
 "id": "2237",
 "title": "Count Positions on Street With Required Brightness",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
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
   "frames": []
  }
 ]
};
