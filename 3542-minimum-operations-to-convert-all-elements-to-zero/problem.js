window.PROBLEM = {
 "id": "3542",
 "title": "Minimum Operations to Convert All Elements to Zero",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "[3,1,2,1]: clear 1s across (1 op), then 2 (1 op), then 3 (1 op) → 3.",
 "idea": "An operation picks a subarray and zeroes all its minimum non-zero values. Scan with a stack that keeps increasing values: pop larger values when a smaller one arrives (those levels are finished); a zero clears the stack; push a value and count one operation whenever it is not already on top of the stack.",
 "input": "nums = [3,1,2,1]",
 "output": "3",
 "notes": [],
 "best": "An operation picks a subarray and zeroes all its minimum non-zero values. Scan with a stack that keeps increasing values: pop larger values when a smaller one arrives (those levels are finished); a zero clears the stack; push a value and count one operation whenever it is not already on top of the stack.",
 "variants": [
  {
   "name": "Monotonic stack: each new smaller level costs one",
   "code": "class Solution:\n    def minOperations(self, nums):\n        st = []\n        ops = 0\n        for x in nums:\n            while st and st[-1] > x:\n                st.pop()\n            if x == 0:\n                continue\n            if not st or st[-1] < x:\n                st.append(x)\n                ops += 1\n        return ops",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "An operation picks a subarray and zeroes all its minimum non-zero values. Scan with a stack that keeps increasing values: pop larger values when a smaller one arrives (those levels are finished); a zero clears the stack; push a value and count one operation whenever it is not already on top of the stack.",
   "frames": []
  }
 ]
};
