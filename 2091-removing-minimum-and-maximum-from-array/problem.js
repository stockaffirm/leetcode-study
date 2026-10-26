window.PROBLEM = {
 "id": "2091",
 "title": "Removing Minimum and Maximum From Array",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[2,10,7,5,4,1,8,6]: min at index 5, max at index 1: removing from both ends costs 5.",
 "idea": "Let i<j be the positions of the min and max in either order. Options: remove from the front until j (j+1 deletions), from the back until i (n−i), or the front to i and the back from j (i+1 + n−j). Take the cheapest.",
 "input": "nums = [2,10,7,5,4,1,8,6]",
 "output": "5",
 "notes": [],
 "best": "Let i<j be the positions of the min and max in either order. Options: remove from the front until j (j+1 deletions), from the back until i (n−i), or the front to i and the back from j (i+1 + n−j). Take the cheapest.",
 "variants": [
  {
   "name": "Best of three ways to clear both ends",
   "code": "class Solution:\n    def minimumDeletions(self, nums):\n        n = len(nums)\n        i, j = sorted((nums.index(min(nums)), nums.index(max(nums))))\n        return min(j + 1, n - i, i + 1 + n - j)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Let i<j be the positions of the min and max in either order. Options: remove from the front until j (j+1 deletions), from the back until i (n−i), or the front to i and the back from j (i+1 + n−j). Take the cheapest.",
   "frames": []
  }
 ]
};
