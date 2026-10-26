window.PROBLEM = {
 "id": "3314",
 "title": "Construct the Minimum Bitwise Array I",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[2,3,5,7] → [-1,1,4,3].",
 "idea": "We need the smallest a with a | (a + 1) == x. Adding 1 to a turns its trailing run of 1s into 0s and sets the next 0, so x must end in a run of at least one 1 (x odd). The minimum a is x with the top bit of that trailing run of 1s cleared: x − 2^(t−1), where t is the length of the run. Even x has no answer: −1.",
 "input": "nums = [2,3,5,7]",
 "output": "[-1, 1, 4, 3]",
 "notes": [],
 "best": "We need the smallest a with a | (a + 1) == x. Adding 1 to a turns its trailing run of 1s into 0s and sets the next 0, so x must end in a run of at least one 1 (x odd). The minimum a is x with the top bit of that trailing run of 1s cleared: x − 2^(t−1), where t is the length of the run. Even x has no answer: −1.",
 "variants": [
  {
   "name": "Clear the highest trailing 1",
   "code": "class Solution:\n    def minBitwiseArray(self, nums):\n        res = []\n        for x in nums:\n            if x % 2 == 0:\n                res.append(-1)\n                continue\n            t = 0\n            while x >> t & 1:\n                t += 1\n            res.append(x - (1 << (t - 1)))\n        return res",
   "time": "O(n log V)",
   "space": "O(n)",
   "explain": "We need the smallest a with a | (a + 1) == x. Adding 1 to a turns its trailing run of 1s into 0s and sets the next 0, so x must end in a run of at least one 1 (x odd). The minimum a is x with the top bit of that trailing run of 1s cleared: x − 2^(t−1), where t is the length of the run. Even x has no answer: −1.",
   "frames": []
  }
 ]
};
