window.PROBLEM = {
 "id": "1013",
 "title": "Partition Array Into Three Parts With Equal Sum",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[0,2,1,-6,6,-7,9,1,2,0,1] → total 3... splits at sums 1/1/1 → true.",
 "idea": "The total must be divisible by 3. Walk the array adding to a running sum; each time it reaches target = total/3, count a part and reset to 0. We need at least three parts (a third part may be empty-sum when the rest is zero, so require count ≥ 3).",
 "input": "arr = [0,2,1,-6,6,-7,9,1,2,0,1]",
 "output": "true",
 "notes": [],
 "best": "The total must be divisible by 3. Walk the array adding to a running sum; each time it reaches target = total/3, count a part and reset to 0. We need at least three parts (a third part may be empty-sum when the rest is zero, so require count ≥ 3).",
 "variants": [
  {
   "name": "Count prefixes that hit total/3",
   "code": "class Solution:\n    def canThreePartsEqualSum(self, arr):\n        total = sum(arr)\n        if total % 3:\n            return False\n        target = total // 3\n        run = parts = 0\n        for x in arr:\n            run += x\n            if run == target:\n                parts += 1\n                run = 0\n        return parts >= 3",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The total must be divisible by 3. Walk the array adding to a running sum; each time it reaches target = total/3, count a part and reset to 0. We need at least three parts (a third part may be empty-sum when the rest is zero, so require count ≥ 3).",
   "frames": []
  }
 ]
};
