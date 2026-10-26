window.PROBLEM = {
 "id": "932",
 "title": "Beautiful Array",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=4 → [2,1,4,3].",
 "idea": "An array with no i<k<j where 2·nums[k] = nums[i] + nums[j] stays beautiful under x → 2x−1 and x → 2x. So build beautiful(n) from beautiful of the odd count mapped to odd numbers followed by beautiful of the even count mapped to even numbers.",
 "input": "n = 4",
 "output": "[1, 3, 2, 4]",
 "notes": [],
 "best": "An array with no i<k<j where 2·nums[k] = nums[i] + nums[j] stays beautiful under x → 2x−1 and x → 2x. So build beautiful(n) from beautiful of the odd count mapped to odd numbers followed by beautiful of the even count mapped to even numbers.",
 "variants": [
  {
   "name": "Divide and conquer: odds then evens",
   "code": "class Solution:\n    def beautifulArray(self, n):\n        res = [1]\n        while len(res) < n:\n            res = [2 * x - 1 for x in res] + [2 * x for x in res]\n        return [x for x in res if x <= n]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "An array with no i<k<j where 2·nums[k] = nums[i] + nums[j] stays beautiful under x → 2x−1 and x → 2x. So build beautiful(n) from beautiful of the odd count mapped to odd numbers followed by beautiful of the even count mapped to even numbers.",
   "frames": []
  }
 ]
};
