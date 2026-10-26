window.PROBLEM = {
 "id": "907",
 "title": "Sum of Subarray Minimums",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "[3,1,2,4]: the minimums of all subarrays are 3,1,1,1,1,2,2,4,… adding to 17.",
 "idea": "For each element count the subarrays in which it is the minimum: it can extend left until a smaller element and right until a smaller-or-equal one. Two monotonic-stack passes give these distances; the contribution is value × left × right.",
 "input": "arr = [3,1,2,4]",
 "output": "17",
 "notes": [],
 "best": "For each element count the subarrays in which it is the minimum: it can extend left until a smaller element and right until a smaller-or-equal one. Two monotonic-stack passes give these distances; the contribution is value × left × right.",
 "variants": [
  {
   "name": "Monotonic stack: how far each value is the minimum",
   "code": "class Solution:\n    def sumSubarrayMins(self, arr):\n        MOD = 10 ** 9 + 7\n        n = len(arr)\n        left, right = [0] * n, [0] * n\n        st = []\n        for i in range(n):\n            while st and arr[st[-1]] > arr[i]:\n                st.pop()\n            left[i] = i - (st[-1] if st else -1)\n            st.append(i)\n        st = []\n        for i in range(n - 1, -1, -1):\n            while st and arr[st[-1]] >= arr[i]:\n                st.pop()\n            right[i] = (st[-1] if st else n) - i\n            st.append(i)\n        return sum(a * l * r for a, l, r in zip(arr, left, right)) % MOD",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each element count the subarrays in which it is the minimum: it can extend left until a smaller element and right until a smaller-or-equal one. Two monotonic-stack passes give these distances; the contribution is value × left × right.",
   "frames": []
  }
 ]
};
