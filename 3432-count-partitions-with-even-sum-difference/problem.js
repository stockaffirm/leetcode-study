window.PROBLEM = {
 "id": "3432",
 "title": "Count Partitions with Even Sum Difference",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[10,10,3,7,6] → total 36 is even → all 4 cut positions work.",
 "idea": "left − right = 2·left − total, so its parity equals the parity of the total sum. If the total is even every cut works (n − 1 cuts), otherwise none does.",
 "input": "nums = [10,10,3,7,6]",
 "output": "4",
 "notes": [],
 "best": "left − right = 2·left − total, so its parity equals the parity of the total sum. If the total is even every cut works (n − 1 cuts), otherwise none does.",
 "variants": [
  {
   "name": "Difference parity = total parity",
   "code": "class Solution:\n    def countPartitions(self, nums):\n        return len(nums) - 1 if sum(nums) % 2 == 0 else 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "left − right = 2·left − total, so its parity equals the parity of the total sum. If the total is even every cut works (n − 1 cuts), otherwise none does.",
   "frames": []
  }
 ]
};
