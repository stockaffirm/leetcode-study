window.PROBLEM = {
 "id": "825",
 "title": "Friends Of Appropriate Ages",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "People have ages. Person A will NOT send a friend request to B if B ≤ 0.5·A + 7, or B > A, or (B > 100 and A < 100); otherwise A sends one (requests are not symmetric and nobody asks themselves). Return the total number of requests. Example: [16,17,18] → 2.",
 "why": "Ages 16, 17, 18: 17 may ask 16 (16 > 15.5), 18 may ask 17 (17 > 16), but 18 may not ask 16 (16 ≤ 16) → 2 requests.",
 "idea": "Ages are at most 120, so count people per age and test every age pair once. A sends to B unless B ≤ 0.5·A + 7 or B > A. Multiply the counts, and remove self-requests when the ages are equal.",
 "input": "ages = [16,17,18]",
 "output": "2",
 "notes": [],
 "best": "Ages are at most 120, so count people per age and test every age pair once. A sends to B unless B ≤ 0.5·A + 7 or B > A. Multiply the counts, and remove self-requests when the ages are equal.",
 "variants": [
  {
   "name": "Count people per age",
   "code": "class Solution:\n    def numFriendRequests(self, ages):\n        cnt = Counter(ages)\n        res = 0\n        for a, ca in cnt.items():\n            for b, cb in cnt.items():\n                if b <= 0.5 * a + 7 or b > a:\n                    continue\n                res += ca * cb - (ca if a == b else 0)\n        return res",
   "time": "O(120² + n)",
   "space": "O(120)",
   "explain": "Ages are at most 120, so count people per age and test every age pair once. A sends to B unless B ≤ 0.5·A + 7 or B > A. Multiply the counts, and remove self-requests when the ages are equal.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Test every pair of people",
   "tag": "Brute force",
   "code": "class Solution:\n    def numFriendRequests(self, ages):\n        res = 0\n        for i, a in enumerate(ages):\n            for j, b in enumerate(ages):\n                if i != j and not (b <= 0.5 * a + 7 or b > a):\n                    res += 1\n        return res",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Check the three rules for every ordered pair of different people.",
   "frames": [],
   "alt": true
  }
 ]
};
