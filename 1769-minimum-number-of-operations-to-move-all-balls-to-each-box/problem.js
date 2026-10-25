window.PROBLEM = {
 "id": "1769",
 "title": "Minimum Number of Operations to Move All Balls to Each Box",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "boxes is a binary string: '1' means a box holds a ball. Moving a ball to a neighbouring box takes one operation. For each box return the minimum number of operations to move ALL balls into that box. Example: '110' → [1,1,3].",
 "why": "Boxes '110': moving all balls to box 0 costs 1, to box 1 costs 1, to box 2 costs 2 + 1 = 3.",
 "idea": "Sweep left to right keeping the number of balls seen (cnt) and the cost to move them to the current box (ops): each step every ball needs one more move, so ops += cnt. Do the same from the right and add both sweeps for every box.",
 "input": "boxes = \"110\"",
 "output": "[1,1,3]",
 "notes": [],
 "best": "Sweep left to right keeping the number of balls seen (cnt) and the cost to move them to the current box (ops): each step every ball needs one more move, so ops += cnt. Do the same from the right and add both sweeps for every box.",
 "variants": [
  {
   "name": "Two sweeps carrying a ball count",
   "code": "class Solution:\n    def minOperations(self, boxes):\n        n = len(boxes)\n        res = [0] * n\n        cnt = ops = 0\n        for i in range(n):\n            res[i] += ops\n            cnt += int(boxes[i])\n            ops += cnt\n        cnt = ops = 0\n        for i in range(n - 1, -1, -1):\n            res[i] += ops\n            cnt += int(boxes[i])\n            ops += cnt\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Sweep left to right keeping the number of balls seen (cnt) and the cost to move them to the current box (ops): each step every ball needs one more move, so ops += cnt. Do the same from the right and add both sweeps for every box.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Add up the distances for each box",
   "tag": "Brute force",
   "code": "class Solution:\n    def minOperations(self, boxes):\n        n = len(boxes)\n        return [sum(abs(i - j) for j in range(n) if boxes[j] == \"1\") for i in range(n)]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For every target box sum the distances of all boxes holding a ball.",
   "frames": [],
   "alt": true
  }
 ]
};
