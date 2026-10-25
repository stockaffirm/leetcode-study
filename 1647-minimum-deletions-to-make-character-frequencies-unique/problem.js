window.PROBLEM = {
 "id": "1647",
 "title": "Minimum Deletions to Make Character Frequencies Unique",
 "level": "Medium",
 "topic": "Greedy",
 "question": "A string is good if no two letters occur the same number of times. Return the minimum number of characters to delete to make s good. Example: 'aaabbbcc' → 2.",
 "why": "'aaabbbcc' has frequencies 3, 3, 2: lower the second 3 to 2, then the clashing 2 to 1 → 2 deletions.",
 "idea": "Count each letter's frequency. Process frequencies from largest to smallest, remembering the highest frequency still allowed: if a frequency is not below that cap, delete characters until it is (or until 0), counting the deletions.",
 "input": "s = \"aaabbbcc\"",
 "output": "2",
 "notes": [],
 "best": "Count each letter's frequency. Process frequencies from largest to smallest, remembering the highest frequency still allowed: if a frequency is not below that cap, delete characters until it is (or until 0), counting the deletions.",
 "variants": [
  {
   "name": "Lower each duplicate frequency until free",
   "code": "class Solution:\n    def minDeletions(self, s):\n        used = set()\n        deletions = 0\n        for f in sorted(Counter(s).values(), reverse=True):\n            while f > 0 and f in used:\n                f -= 1\n                deletions += 1\n            used.add(f)\n        return deletions",
   "time": "O(n + 26 log 26)",
   "space": "O(1)",
   "explain": "Count each letter's frequency. Process frequencies from largest to smallest, remembering the highest frequency still allowed: if a frequency is not below that cap, delete characters until it is (or until 0), counting the deletions.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Max-heap of frequencies",
   "tag": "Alternative",
   "code": "class Solution:\n    def minDeletions(self, s):\n        heap = [-c for c in Counter(s).values()]\n        heapify(heap)\n        deletions = 0\n        while len(heap) > 1:\n            top = -heappop(heap)\n            if top == -heap[0]:\n                deletions += 1\n                if top - 1 > 0:\n                    heappush(heap, -(top - 1))\n            else:\n                pass\n        return deletions",
   "time": "O(n log 26)",
   "space": "O(26)",
   "explain": "Take the largest frequency; if it equals the next one, delete a character and push it back.",
   "frames": [],
   "alt": true
  }
 ]
};
