window.PROBLEM = {
 "id": "1962",
 "title": "Remove Stones to Minimize the Total",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "k times: pick a pile and remove half of it (rounded down). Make the total as small as possible.",
 "idea": "Removing half of the BIGGEST pile always saves the most, so keep the piles in a max-heap and halve the top k times.",
 "input": "piles [5, 4, 9], k=2",
 "output": "12",
 "notes": [],
 "best": "Removing half of the BIGGEST pile always saves the most, so keep the piles in a max-heap and halve the top k times.",
 "variants": [
  {
   "name": "Max-heap: halve the biggest pile",
   "code": "class Solution:\n    def minStoneSum(self, piles, k):\n        h = [-p for p in piles]\n        heapify(h)\n        for _ in range(k):\n            x = -heappop(h)\n            heappush(h, -(x - x // 2))\n        return -sum(h)",
   "time": "O((n + k) log n)",
   "space": "O(n)",
   "explain": "Removing half of the BIGGEST pile always saves the most, so keep the piles in a max-heap and halve the top k times.",
   "frames": []
  }
 ]
};
