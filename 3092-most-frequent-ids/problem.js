window.PROBLEM = {
 "id": "3092",
 "title": "Most Frequent IDs",
 "level": "Medium",
 "topic": "Heap",
 "question": "You track how many copies of each ID exist. Two lists of equal length: nums[i] is an ID and freq[i] says how many copies of that ID are added (if positive) or removed (if negative) at step i. After each step, record the count of the MOST frequent ID (0 if the collection is empty). Return the list of those counts. Example: nums [2,3,2,1], freq [3,2,-3,1] → after step 1: three 2s; step 2: three 2s and two 3s; step 3: two 3s; step 4: two 3s and one 1 → [3,3,2,2].",
 "why": "IDs are added or removed in bulk step by step. After each step, how many times does the MOST common ID appear?",
 "idea": "Keep counts per ID and push (−count, id) onto a max-heap after every change. Before reading the top, discard entries whose count is out of date.",
 "input": "nums [2,3,2,1], freq [3,2,-3,1]",
 "output": "[3, 3, 2, 2]",
 "notes": [],
 "best": "Keep counts per ID and push (−count, id) onto a max-heap after every change. Before reading the top, discard entries whose count is out of date.",
 "variants": [
  {
   "name": "Max-heap with lazy deletion",
   "code": "class Solution:\n    def mostFrequentIDs(self, nums, freq):\n        cnt, heap, ans = defaultdict(int), [], []\n        for x, f in zip(nums, freq):\n            cnt[x] += f\n            heappush(heap, (-cnt[x], x))\n            while -heap[0][0] != cnt[heap[0][1]]: heappop(heap)\n            ans.append(-heap[0][0])\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Keep counts per ID and push (−count, id) onto a max-heap after every change. Before reading the top, discard entries whose count is out of date.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recompute the maximum",
   "tag": "Brute force",
   "code": "class Solution:\n    def mostFrequentIDs(self, nums, freq):\n        cnt, ans = defaultdict(int), []\n        for x, f in zip(nums, freq):\n            cnt[x] += f\n            ans.append(max(cnt.values()))\n        return ans",
   "time": "O(n·m)",
   "space": "O(m)",
   "explain": "After every change take max() over all current counts.",
   "frames": [],
   "alt": true
  }
 ]
};
