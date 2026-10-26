window.PROBLEM = {
 "id": "1274",
 "title": "Number of Ships in a Rectangle",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "Ships at (1,1), (2,2), (3,3), (5,5): in the rectangle (0,0)–(4,4) there are 3 of them.",
 "idea": "You may only ask 'is there at least one ship in this rectangle?'. If the answer is no, return 0. If the rectangle is a single point return 1. Otherwise split it into four quarters and add the counts. Since there are at most 10 ships only a few rectangles are ever refined.",
 "input": "ships = [[1,1],[2,2],[3,3],[5,5]], topRight = [4,4], bottomLeft = [0,0]",
 "output": "3",
 "notes": [],
 "best": "You may only ask 'is there at least one ship in this rectangle?'. If the answer is no, return 0. If the rectangle is a single point return 1. Otherwise split it into four quarters and add the counts. Since there are at most 10 ships only a few rectangles are ever refined.",
 "variants": [
  {
   "name": "Divide and conquer with the hasShips oracle",
   "code": "class Solution:\n    def countShips(self, sea, topRight, bottomLeft):\n        def go(tr, bl):\n            if tr.x < bl.x or tr.y < bl.y or not sea.hasShips(tr, bl):\n                return 0\n            if tr.x == bl.x and tr.y == bl.y:\n                return 1\n            mx, my = (tr.x + bl.x) // 2, (tr.y + bl.y) // 2\n            return (go(Point(mx, my), bl)\n                    + go(tr, Point(mx + 1, my + 1))\n                    + go(Point(mx, tr.y), Point(bl.x, my + 1))\n                    + go(Point(tr.x, my), Point(mx + 1, bl.y)))\n        return go(topRight, bottomLeft)",
   "time": "O(ships · log size)",
   "space": "O(log size)",
   "explain": "You may only ask 'is there at least one ship in this rectangle?'. If the answer is no, return 0. If the rectangle is a single point return 1. Otherwise split it into four quarters and add the counts. Since there are at most 10 ships only a few rectangles are ever refined.",
   "frames": []
  }
 ]
};
