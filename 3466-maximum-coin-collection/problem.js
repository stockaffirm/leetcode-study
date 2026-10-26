window.PROBLEM = {
 "id": "3466",
 "title": "Maximum Coin Collection",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Mario drives on a two-lane road with coins (or tolls) every mile. He enters on lane 1 anywhere, leaves any time after at least one mile, and may switch lanes at most twice. Maximise the coins.",
 "idea": "Track the best total for a stretch ending at this mile in three situations: lane 1 with 0 switches, lane 2 after 1 switch, lane 1 after 2 switches. A new stretch may start at any mile.",
 "input": "lane1 [1,-2,-10,3], lane2 [-5,10,0,1]",
 "output": "14",
 "notes": [],
 "best": "Track the best total for a stretch ending at this mile in three situations: lane 1 with 0 switches, lane 2 after 1 switch, lane 1 after 2 switches. A new stretch may start at any mile.",
 "variants": [
  {
   "name": "DP with lane and switch count",
   "code": "class Solution:\n    def maxCoins(self, lane1, lane2):\n        NEG = float('-inf')\n        f00 = f11 = f02 = NEG\n        best = NEG\n        for a, b in zip(lane1, lane2):\n            base0 = max(f00, 0)\n            n00 = base0 + a\n            n11 = max(base0, f11) + b\n            n02 = max(f11, f02) + a\n            f00, f11, f02 = n00, n11, n02\n            best = max(best, f00, f11, f02)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track the best total for a stretch ending at this mile in three situations: lane 1 with 0 switches, lane 2 after 1 switch, lane 1 after 2 switches. A new stretch may start at any mile.",
   "frames": []
  }
 ]
};
