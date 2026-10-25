window.PROBLEM = {
 "id": "1481",
 "title": "Least Number of Unique Integers after K Removals",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Remove exactly k elements from arr. Return the least number of distinct values that can remain. Example: [5,5,4], k=1 → 1.",
 "why": "[5,5,4], k=1: removing the single 4 leaves just the value 5 → 1 unique integer.",
 "idea": "To minimise how many distinct values remain, delete values completely, starting with those that appear least often. Sort the frequencies ascending and spend k removals on whole groups while you can.",
 "input": "arr = [5,5,4], k = 1",
 "output": "1",
 "notes": [],
 "best": "To minimise how many distinct values remain, delete values completely, starting with those that appear least often. Sort the frequencies ascending and spend k removals on whole groups while you can.",
 "variants": [
  {
   "name": "Wipe out the rarest values first",
   "code": "class Solution:\n    def findLeastNumOfUniqueInts(self, arr, k):\n        counts = sorted(Counter(arr).values())\n        removed = 0\n        for c in counts:\n            if k >= c:\n                k -= c\n                removed += 1\n            else:\n                break\n        return len(counts) - removed",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "To minimise how many distinct values remain, delete values completely, starting with those that appear least often. Sort the frequencies ascending and spend k removals on whole groups while you can.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Min-heap of frequencies",
   "tag": "Alternative",
   "code": "class Solution:\n    def findLeastNumOfUniqueInts(self, arr, k):\n        heap = list(Counter(arr).values())\n        heapify(heap)\n        while heap and k >= heap[0]:\n            k -= heappop(heap)\n        return len(heap)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Pop the smallest frequency while it can still be removed completely.",
   "frames": [],
   "alt": true
  }
 ]
};
