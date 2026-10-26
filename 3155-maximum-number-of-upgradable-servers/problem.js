window.PROBLEM = {
 "id": "3155",
 "title": "Maximum Number of Upgradable Servers",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "At each data centre you may sell some servers to pay for upgrading others. How many servers can you upgrade? (Each server is either sold, upgraded or untouched.)",
 "idea": "If you upgrade x servers, you must be able to pay: x·upgradeCost ≤ money + (count − x)·sellPrice. Solving for x gives x ≤ (money + count·sell) / (upgrade + sell), and x cannot exceed count.",
 "input": "count [4,3], upgrade [3,5], sell [4,2], money [8,9]",
 "output": "[3, 2]",
 "notes": [],
 "best": "If you upgrade x servers, you must be able to pay: x·upgradeCost ≤ money + (count − x)·sellPrice. Solving for x gives x ≤ (money + count·sell) / (upgrade + sell), and x cannot exceed count.",
 "variants": [
  {
   "name": "Closed-form per data centre",
   "code": "class Solution:\n    def maxUpgrades(self, count, upgrade, sell, money):\n        ans = []\n        for c, u, s, m in zip(count, upgrade, sell, money):\n            ans.append(min(c, (c * s + m) // (u + s)))\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "If you upgrade x servers, you must be able to pay: x·upgradeCost ≤ money + (count − x)·sellPrice. Solving for x gives x ≤ (money + count·sell) / (upgrade + sell), and x cannot exceed count.",
   "frames": []
  }
 ]
};
