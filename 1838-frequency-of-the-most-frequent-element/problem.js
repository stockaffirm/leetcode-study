window.PROBLEM = {
 "id": "1838",
 "title": "Frequency of the Most Frequent Element",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "In one operation add 1 to any element; at most k operations. What is the highest frequency of one value you can reach?",
 "idea": "Sort. Raise a window of numbers up to the window's last (largest) value: cost = largest × length − sum. Grow the window to the right and shrink from the left while the cost exceeds k.",
 "input": "[1,4,8,13], k=5",
 "output": "2",
 "notes": [],
 "best": "Sort. Raise a window of numbers up to the window's last (largest) value: cost = largest × length − sum. Grow the window to the right and shrink from the left while the cost exceeds k.",
 "variants": [
  {
   "name": "Sort + sliding window",
   "code": "class Solution:\n    def maxFrequency(self, nums, k):\n        nums = sorted(nums)\n        l = total = best = 0\n        for r, x in enumerate(nums):\n            total += x\n            while x * (r - l + 1) - total > k:\n                total -= nums[l]\n                l += 1\n            best = max(best, r - l + 1)\n        return best",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort. Raise a window of numbers up to the window's last (largest) value: cost = largest × length − sum. Grow the window to the right and shrink from the left while the cost exceeds k.",
   "frames": []
  }
 ]
};
