window.PROBLEM = {
 "id": "1167",
 "title": "Minimum Cost to Connect Sticks",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "[2,4,3]: join 2+3 (cost 5), then 5+4 (cost 9) → 14.",
 "idea": "Joining two sticks costs their sum, and sticks joined early get re-counted in later joins. So join the two shortest sticks every time (Huffman style) using a min-heap.",
 "input": "sticks = [2,4,3]",
 "output": "14",
 "notes": [],
 "best": "Joining two sticks costs their sum, and sticks joined early get re-counted in later joins. So join the two shortest sticks every time (Huffman style) using a min-heap.",
 "variants": [
  {
   "name": "Always join the two shortest sticks",
   "code": "class Solution:\n    def connectSticks(self, sticks):\n        heapify(sticks)\n        cost = 0\n        while len(sticks) > 1:\n            a = heappop(sticks)\n            b = heappop(sticks)\n            cost += a + b\n            heappush(sticks, a + b)\n        return cost",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Joining two sticks costs their sum, and sticks joined early get re-counted in later joins. So join the two shortest sticks every time (Huffman style) using a min-heap.",
   "frames": []
  }
 ]
};
