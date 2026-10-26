window.PROBLEM = {
 "id": "3113",
 "title": "Find the Number of Subarrays Where Boundary Elements Are Maximum",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "Count the subarrays whose first and last numbers both equal the biggest number in the subarray.",
 "idea": "Keep a stack of (value, how many times it appears) that is decreasing. For a new number pop every smaller value; if the top equals it, increase its count. Each subarray ending here and starting at one of those equal numbers is valid, so add the top's count.",
 "input": "[1,4,3,3,2]",
 "output": "6",
 "notes": [],
 "best": "Keep a stack of (value, how many times it appears) that is decreasing. For a new number pop every smaller value; if the top equals it, increase its count. Each subarray ending here and starting at one of those equal numbers is valid, so add the top's count.",
 "variants": [
  {
   "name": "Monotonic stack with counts",
   "code": "class Solution:\n    def numberOfSubarrays(self, nums):\n        st = []\n        ans = 0\n        for x in nums:\n            while st and st[-1][0] < x: st.pop()\n            if st and st[-1][0] == x: st[-1][1] += 1\n            else: st.append([x, 1])\n            ans += st[-1][1]\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a stack of (value, how many times it appears) that is decreasing. For a new number pop every smaller value; if the top equals it, increase its count. Each subarray ending here and starting at one of those equal numbers is valid, so add the top's count.",
   "frames": []
  }
 ]
};
