window.PROBLEM = {
 "id": "3005",
 "title": "Count Elements With Maximum Frequency",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,2,2,3,1,4]: 1 and 2 both appear twice → 4 elements.",
 "idea": "Count each value; the answer is (max frequency) × (how many values have that frequency).",
 "input": "nums = [1,2,2,3,1,4]",
 "output": "4",
 "notes": [],
 "best": "Count each value; the answer is (max frequency) × (how many values have that frequency).",
 "variants": [
  {
   "name": "Sum the counts equal to the maximum",
   "code": "class Solution:\n    def maxFrequencyElements(self, nums):\n        cnt = Counter(nums)\n        top = max(cnt.values())\n        return top * sum(1 for v in cnt.values() if v == top)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count each value; the answer is (max frequency) × (how many values have that frequency).",
   "frames": []
  }
 ]
};
