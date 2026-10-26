window.PROBLEM = {
 "id": "2491",
 "title": "Divide Players Into Teams of Equal Skill",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "[3,2,5,1,3,4] → pairs (1,5), (2,4), (3,3) all sum to 6 → 3·... chemistry 5 + 8 + 9 = 22.",
 "idea": "All teams of two must have the same total skill. After sorting, the only way is to pair the smallest with the largest, the second smallest with the second largest, and so on, and every pair must have the same sum. Add up the products; return −1 if a pair differs.",
 "input": "skill = [3,2,5,1,3,4]",
 "output": "22",
 "notes": [],
 "best": "All teams of two must have the same total skill. After sorting, the only way is to pair the smallest with the largest, the second smallest with the second largest, and so on, and every pair must have the same sum. Add up the products; return −1 if a pair differs.",
 "variants": [
  {
   "name": "Pair smallest with largest",
   "code": "class Solution:\n    def dividePlayers(self, skill):\n        skill.sort()\n        target = skill[0] + skill[-1]\n        total = 0\n        for i in range(len(skill) // 2):\n            a, b = skill[i], skill[-1 - i]\n            if a + b != target:\n                return -1\n            total += a * b\n        return total",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "All teams of two must have the same total skill. After sorting, the only way is to pair the smallest with the largest, the second smallest with the second largest, and so on, and every pair must have the same sum. Add up the products; return −1 if a pair differs.",
   "frames": []
  }
 ]
};
