window.PROBLEM = {
 "id": "2145",
 "title": "Count the Hidden Sequences",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "differences[i] = hidden[i+1] − hidden[i]. Count the hidden sequences whose elements all lie in [lower, upper]. Example: differences [1,-3,4], lower 1, upper 6 → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count the starting values directly",
   "tag": "Brute force",
   "code": "class Solution:\n    def numberOfArrays(self, differences, lower, upper):\n        count = 0\n        for x in range(lower, upper + 1):\n            cur = x\n            ok = True\n            for d in differences:\n                cur += d\n                if not lower <= cur <= upper:\n                    ok = False\n                    break\n            count += ok\n        return count",
   "time": "O(n·range)",
   "space": "O(1)",
   "explain": "Try every starting value in [lower, upper] and check the whole sequence stays in range.",
   "frames": [],
   "alt": true
  }
 ]
};
