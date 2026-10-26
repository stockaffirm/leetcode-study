window.PROBLEM = {
 "id": "1963",
 "title": "Minimum Number of Swaps to Make the String Balanced",
 "level": "Medium",
 "topic": "Greedy",
 "question": "You are given a string s of even length containing exactly n '[' and n ']' brackets. A string is balanced if it is empty, or it is '[' + a balanced string + ']', or two balanced strings next to each other. You may swap ANY two characters (any positions) any number of times. Return the minimum number of swaps needed to make s balanced. Example: ']]][[[' → 2 swaps give '[[[]]]' → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Lowest running balance",
   "tag": "Alternative",
   "code": "class Solution:\n    def minSwaps(self, s):\n        bal, low = 0, 0\n        for ch in s:\n            bal += 1 if ch == '[' else -1\n            low = min(low, bal)\n        return (-low + 1) // 2",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track balance (+1 for '[', −1 for ']'); the lowest dip tells how many ']' are stranded.",
   "frames": [],
   "alt": true
  }
 ]
};
