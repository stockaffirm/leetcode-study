window.PROBLEM = {
 "id": "2145",
 "title": "Count the Hidden Sequences",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "differences [1,-3,4], lower 1, upper 6: the first value can be 3 or 4 → 2 sequences.",
 "idea": "The hidden sequence is the first value x plus the running sum of differences. Track the lowest and highest running sums. All values stay within [lower, upper] when lower ≤ x + low and x + high ≤ upper, so the number of valid x is (upper − lower) − (high − low) + 1, or 0 if negative.",
 "input": "differences = [1,-3,4], lower = 1, upper = 6",
 "output": "2",
 "notes": [],
 "best": "The hidden sequence is the first value x plus the running sum of differences. Track the lowest and highest running sums. All values stay within [lower, upper] when lower ≤ x + low and x + high ≤ upper, so the number of valid x is (upper − lower) − (high − low) + 1, or 0 if negative.",
 "variants": [
  {
   "name": "Range of the prefix sums",
   "code": "class Solution:\n    def numberOfArrays(self, differences, lower, upper):\n        cur = lo = hi = 0\n        for d in differences:\n            cur += d\n            lo = min(lo, cur)\n            hi = max(hi, cur)\n        return max(0, (upper - lower) - (hi - lo) + 1)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The hidden sequence is the first value x plus the running sum of differences. Track the lowest and highest running sums. All values stay within [lower, upper] when lower ≤ x + low and x + high ≤ upper, so the number of valid x is (upper − lower) − (high − low) + 1, or 0 if negative.",
   "frames": []
  }
 ]
};
