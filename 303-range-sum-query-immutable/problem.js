window.PROBLEM = {
 "id": "303",
 "title": "Range Sum Query - Immutable",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "Design a class NumArray(nums) that answers many queries sumRange(left, right): the sum of the numbers from index left to right inclusive. The array never changes. Example: [-2,0,3,-5,2,-1]: sumRange(0,2) → 1, sumRange(2,5) → −1, sumRange(0,5) → −3.",
 "why": "[-2,0,3,-5,2,-1]: the sum of positions 0–2 is −2 + 0 + 3 = 1.",
 "idea": "Precompute pre[i] = sum of the first i numbers. The sum of positions left…right is then pre[right + 1] − pre[left], answered in O(1).",
 "input": "NumArray([-2,0,3,-5,2,-1]); sumRange(0,2)",
 "output": "1",
 "notes": [],
 "best": "Precompute pre[i] = sum of the first i numbers. The sum of positions left…right is then pre[right + 1] − pre[left], answered in O(1).",
 "variants": [
  {
   "name": "Prefix sums",
   "code": "class NumArray:\n    def __init__(self, nums):\n        self.pre = [0] + list(accumulate(nums))\n    def sumRange(self, left, right):\n        return self.pre[right + 1] - self.pre[left]",
   "time": "O(1) per query",
   "space": "O(n)",
   "explain": "Precompute pre[i] = sum of the first i numbers. The sum of positions left…right is then pre[right + 1] − pre[left], answered in O(1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sum the slice each time",
   "tag": "Brute force",
   "code": "class NumArray:\n    def __init__(self, nums):\n        self.nums = nums\n    def sumRange(self, left, right):\n        return sum(self.nums[left:right + 1])",
   "time": "O(n) per query",
   "space": "O(n)",
   "explain": "Keep the array and add up the range on every query.",
   "frames": [],
   "alt": true
  }
 ]
};
