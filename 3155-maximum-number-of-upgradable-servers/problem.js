window.PROBLEM = {
 "id": "3155",
 "title": "Maximum Number of Upgradable Servers",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "There are n data centres. For centre i you are given count[i] servers, upgrade[i] (the cost of upgrading one server), sell[i] (the money you get by selling one server) and money[i] (the money you start with there). You may sell some servers to raise money and use money (the starting money plus what you earn) to upgrade other servers; a server cannot be both sold and upgraded. For each centre return the maximum number of servers that can be upgraded. Example: count [4,3], upgrade [3,5], sell [4,2], money [8,9] → [3,2].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search per centre",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxUpgrades(self, count, upgrade, sell, money):\n        ans = []\n        for c, u, s, m in zip(count, upgrade, sell, money):\n            lo, hi = 0, c\n            while lo < hi:\n                mid = (lo + hi + 1) // 2\n                if mid * u <= m + (c - mid) * s: lo = mid\n                else: hi = mid - 1\n            ans.append(lo)\n        return ans",
   "time": "O(n log C)",
   "space": "O(n)",
   "explain": "The largest x with x·upgrade ≤ money + (count − x)·sell, found by binary search.",
   "frames": [],
   "alt": true
  }
 ]
};
