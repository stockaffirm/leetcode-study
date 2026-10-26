window.PROBLEM = {
 "id": "3471",
 "title": "Find the Largest Almost Missing Integer",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[3,9,2,1,7], k=3: 7 appears in exactly one window of size 3 and is the largest such value → 7.",
 "idea": "For each window of size k add 1 to the counter of every distinct value in it. Values whose counter is exactly 1 are almost missing; return the largest or −1.",
 "input": "nums = [3,9,2,1,7], k = 3",
 "output": "7",
 "notes": [],
 "best": "For each window of size k add 1 to the counter of every distinct value in it. Values whose counter is exactly 1 are almost missing; return the largest or −1.",
 "variants": [
  {
   "name": "Count in how many windows each value appears",
   "code": "class Solution:\n    def largestInteger(self, nums, k):\n        cnt = Counter()\n        for i in range(len(nums) - k + 1):\n            for v in set(nums[i:i + k]):\n                cnt[v] += 1\n        return max((v for v, c in cnt.items() if c == 1), default=-1)",
   "time": "O(n·k)",
   "space": "O(n)",
   "explain": "For each window of size k add 1 to the counter of every distinct value in it. Values whose counter is exactly 1 are almost missing; return the largest or −1.",
   "frames": []
  }
 ]
};
