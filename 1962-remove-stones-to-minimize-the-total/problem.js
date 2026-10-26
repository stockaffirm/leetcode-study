window.PROBLEM = {
 "id": "1962",
 "title": "Remove Stones to Minimize the Total",
 "level": "Medium",
 "topic": "Heap",
 "question": "You have several piles of stones, piles[i] = stones in pile i, and a number k. In one operation you choose a pile and remove half of its stones, rounded DOWN (a pile with x stones loses ⌊x/2⌋ and keeps x − ⌊x/2⌋). You must do exactly k operations (the same pile may be chosen again). Return the smallest possible total number of stones left. Example: [5,4,9], k=2 → halve 9 (leaves 5), then halve 5 (leaves 3) → 3 + 4 + 5 = 12.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Re-sort every time",
   "tag": "Brute force",
   "code": "class Solution:\n    def minStoneSum(self, piles, k):\n        for _ in range(k):\n            piles.sort()\n            piles[-1] -= piles[-1] // 2\n        return sum(piles)",
   "time": "O(k · n log n)",
   "space": "O(1)",
   "explain": "Sort the piles, halve the last (largest), repeat.",
   "frames": [],
   "alt": true
  }
 ]
};
