window.PROBLEM = {
 "id": "2058",
 "title": "Find the Minimum and Maximum Number of Nodes Between Critical Points",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "[5,3,1,2,5,1,2] has critical points at positions 2, 4 and 5 → [1, 3].",
 "idea": "A critical point is an inner node that is a local maximum or minimum. Record their positions. The minimum distance is the smallest gap between consecutive positions and the maximum is last − first; with fewer than two critical points return [−1, −1].",
 "input": "head = [5,3,1,2,5,1,2]",
 "output": "[1, 3]",
 "notes": [],
 "best": "A critical point is an inner node that is a local maximum or minimum. Record their positions. The minimum distance is the smallest gap between consecutive positions and the maximum is last − first; with fewer than two critical points return [−1, −1].",
 "variants": [
  {
   "name": "Collect critical positions in one pass",
   "code": "class Solution:\n    def nodesBetweenCriticalPoints(self, head):\n        pos = []\n        prev, cur = head, head.next\n        i = 1\n        while cur and cur.next:\n            nxt = cur.next\n            if (cur.val > prev.val and cur.val > nxt.val) or (cur.val < prev.val and cur.val < nxt.val):\n                pos.append(i)\n            prev, cur = cur, nxt\n            i += 1\n        if len(pos) < 2:\n            return [-1, -1]\n        return [min(b - a for a, b in zip(pos, pos[1:])), pos[-1] - pos[0]]",
   "time": "O(n)",
   "space": "O(c)",
   "explain": "A critical point is an inner node that is a local maximum or minimum. Record their positions. The minimum distance is the smallest gap between consecutive positions and the maximum is last − first; with fewer than two critical points return [−1, −1].",
   "frames": []
  }
 ]
};
