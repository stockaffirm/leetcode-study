window.PROBLEM = {
 "id": "3147",
 "title": "Taking Maximum Energy From the Mystic Dungeon",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Magicians in a line give energy[i] (possibly negative). Start at any position, absorb its energy, jump k positions ahead, and repeat until you leave the line. Return the maximum total energy. Example: [5,2,-10,-5,1], k=3 → 3.",
 "why": "[5,2,−10,−5,1], k=3: start at 0 → 5 + (−5) = 0; start at 1 → 2 + 1 = 3 → best 3.",
 "idea": "From a start you jump k places until you fall off the end, collecting energy. Define total[i] = energy[i] + total[i+k]; compute from the right and return the maximum total.",
 "input": "energy = [5,2,-10,-5,1], k = 3",
 "output": "3",
 "notes": [],
 "best": "From a start you jump k places until you fall off the end, collecting energy. Define total[i] = energy[i] + total[i+k]; compute from the right and return the maximum total.",
 "variants": [
  {
   "name": "Suffix sums with stride k",
   "code": "class Solution:\n    def maximumEnergy(self, energy, k):\n        n = len(energy)\n        total = energy[:]\n        for i in range(n - 1 - k, -1, -1):\n            total[i] += total[i + k]\n        return max(total)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "From a start you jump k places until you fall off the end, collecting energy. Define total[i] = energy[i] + total[i+k]; compute from the right and return the maximum total.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumEnergy(self, energy, k):\n        n = len(energy)\n        @lru_cache(None)\n        def total(i):\n            return energy[i] + (total(i + k) if i + k < n else 0)\n        return max(total(i) for i in range(n))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "total(i) = energy[i] + total(i + k) with memoisation.",
   "frames": [],
   "alt": true
  }
 ]
};
