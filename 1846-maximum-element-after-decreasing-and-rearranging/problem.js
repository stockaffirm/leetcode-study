window.PROBLEM = {
 "id": "1846",
 "title": "Maximum Element After Decreasing and Rearranging",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[100,1,1000] → sorted [1,100,1000] → 1, 2, 3 → 3.",
 "idea": "The first element must be 1 and neighbours may differ by at most 1. Sort, set the first to 1 and cap every next element at previous + 1. The last element is the maximum possible.",
 "input": "arr = [100,1,1000]",
 "output": "3",
 "notes": [],
 "best": "The first element must be 1 and neighbours may differ by at most 1. Sort, set the first to 1 and cap every next element at previous + 1. The last element is the maximum possible.",
 "variants": [
  {
   "name": "Sort, then cap each value by previous + 1",
   "code": "class Solution:\n    def maximumElementAfterDecrementingAndRearranging(self, arr):\n        arr.sort()\n        arr[0] = 1\n        for i in range(1, len(arr)):\n            arr[i] = min(arr[i], arr[i - 1] + 1)\n        return arr[-1]",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "The first element must be 1 and neighbours may differ by at most 1. Sort, set the first to 1 and cap every next element at previous + 1. The last element is the maximum possible.",
   "frames": []
  }
 ]
};
