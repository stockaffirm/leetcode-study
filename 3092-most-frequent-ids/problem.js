window.PROBLEM = {
 "id": "3092",
 "title": "Most Frequent IDs",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
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
   "frames": []
  }
 ]
};
