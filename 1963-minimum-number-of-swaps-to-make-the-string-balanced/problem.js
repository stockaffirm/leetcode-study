window.PROBLEM = {
 "id": "1963",
 "title": "Minimum Number of Swaps to Make the String Balanced",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "A string of [ and ] with the same number of each. Swap any two characters, as few times as possible, to make the brackets balanced.",
 "idea": "Scan and match every ']' to an earlier '['. The leftover unmatched ']' are the problem; each swap fixes two of them, so the answer is ⌈unmatched / 2⌉.",
 "input": "\"]]][[[\"",
 "output": "2",
 "notes": [],
 "best": "Scan and match every ']' to an earlier '['. The leftover unmatched ']' are the problem; each swap fixes two of them, so the answer is ⌈unmatched / 2⌉.",
 "variants": [
  {
   "name": "Count unmatched closers",
   "code": "class Solution:\n    def minSwaps(self, s):\n        unmatched = 0\n        for ch in s:\n            if ch == '[': unmatched += 1\n            elif unmatched: unmatched -= 1\n        return (unmatched + 1) // 2",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan and match every ']' to an earlier '['. The leftover unmatched ']' are the problem; each swap fixes two of them, so the answer is ⌈unmatched / 2⌉.",
   "frames": []
  }
 ]
};
