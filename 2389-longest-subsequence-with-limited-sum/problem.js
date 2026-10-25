window.PROBLEM = {
 "id": "2389",
 "title": "Longest Subsequence With Limited Sum",
 "level": "Easy",
 "topic": "Sorting",
 "question": "For each query find the maximum size of a subsequence (any picked numbers, any order of choosing but the sum counts) of nums whose sum is at most the query. Example: nums [4,5,2,1], queries [3,10,21] → [2, 3, 4].",
 "why": "Sorted [1,2,4,5] has prefix sums 1,3,7,12. A budget of 3 fits two numbers, 10 fits three, 21 fits all four.",
 "idea": "The cheapest way to pick many numbers is to take the smallest ones. Sort, build prefix sums, and for each query find how many prefix sums stay within it.",
 "input": "nums = [4,5,2,1], queries = [3,10,21]",
 "output": "[2, 3, 4]",
 "notes": [],
 "best": "The cheapest way to pick many numbers is to take the smallest ones. Sort, build prefix sums, and for each query find how many prefix sums stay within it.",
 "variants": [
  {
   "name": "Sort + prefix sums + bisect",
   "code": "class Solution:\n    def answerQueries(self, nums, queries):\n        pre = list(accumulate(sorted(nums)))\n        return [bisect_right(pre, q) for q in queries]",
   "time": "O((n+q) log n)",
   "space": "O(n)",
   "explain": "The cheapest way to pick many numbers is to take the smallest ones. Sort, build prefix sums, and for each query find how many prefix sums stay within it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Greedy for each query",
   "tag": "Brute force",
   "code": "class Solution:\n    def answerQueries(self, nums, queries):\n        nums = sorted(nums)\n        res = []\n        for q in queries:\n            total = cnt = 0\n            for x in nums:\n                if total + x > q:\n                    break\n                total += x\n                cnt += 1\n            res.append(cnt)\n        return res",
   "time": "O(q · n)",
   "space": "O(n)",
   "explain": "Add the smallest numbers one by one until the next would exceed the query.",
   "frames": [],
   "alt": true
  }
 ]
};
