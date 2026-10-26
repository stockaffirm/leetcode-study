window.PROBLEM = {
 "id": "1675",
 "title": "Minimize Deviation in Array",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "[1,2,3,4] → [2,2,3,4]... best deviation 1.",
 "idea": "Odd numbers can be doubled and even numbers halved. First double every odd number once (they can then only shrink). Now all numbers are even and can only be halved: repeatedly take the maximum from a max-heap, record the deviation (max − min), and halve it while it is even; stop when the maximum is odd.",
 "input": "nums = [1,2,3,4]",
 "output": "1",
 "notes": [],
 "best": "Odd numbers can be doubled and even numbers halved. First double every odd number once (they can then only shrink). Now all numbers are even and can only be halved: repeatedly take the maximum from a max-heap, record the deviation (max − min), and halve it while it is even; stop when the maximum is odd.",
 "variants": [
  {
   "name": "Make everything even, then halve the maximum",
   "code": "class Solution:\n    def minimumDeviation(self, nums):\n        heap = [-(x * 2 if x % 2 else x) for x in nums]\n        heapify(heap)\n        low = -max(heap)\n        best = float('inf')\n        while True:\n            top = -heappop(heap)\n            best = min(best, top - low)\n            if top % 2:\n                break\n            top //= 2\n            low = min(low, top)\n            heappush(heap, -top)\n        return best",
   "time": "O(n log n log V)",
   "space": "O(n)",
   "explain": "Odd numbers can be doubled and even numbers halved. First double every odd number once (they can then only shrink). Now all numbers are even and can only be halved: repeatedly take the maximum from a max-heap, record the deviation (max − min), and halve it while it is even; stop when the maximum is odd.",
   "frames": []
  }
 ]
};
