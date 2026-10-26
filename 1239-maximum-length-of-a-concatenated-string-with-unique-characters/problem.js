window.PROBLEM = {
 "id": "1239",
 "title": "Maximum Length of a Concatenated String with Unique Characters",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Choose some strings of an array and join them so that all characters of the result are different. Return the maximum possible length. Example: ['un','iq','ue'] → 4 ('uniq').",
 "why": "'un' + 'iq' = 'uniq' (4 unique letters); 'ue' clashes with 'un' (u twice) → best is 4.",
 "idea": "Turn each word into a 26-bit mask (skip words with a repeated letter). Keep all masks reachable so far with their lengths; a word can be added to a combination only if the masks do not overlap.",
 "input": "arr = [\"un\",\"iq\",\"ue\"]",
 "output": "4",
 "notes": [],
 "best": "Turn each word into a 26-bit mask (skip words with a repeated letter). Keep all masks reachable so far with their lengths; a word can be added to a combination only if the masks do not overlap.",
 "variants": [
  {
   "name": "Bitmask combinations",
   "code": "class Solution:\n    def maxLength(self, arr):\n        combos = {0: 0}\n        for w in arr:\n            m = 0\n            for ch in w:\n                bit = 1 << (ord(ch) - 97)\n                if m & bit:\n                    m = None\n                    break\n                m |= bit\n            if m is None:\n                continue\n            for old, length in list(combos.items()):\n                if not old & m:\n                    combos[old | m] = length + len(w)\n        return max(combos.values())",
   "time": "O(2ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "Turn each word into a 26-bit mask (skip words with a repeated letter). Keep all masks reachable so far with their lengths; a word can be added to a combination only if the masks do not overlap.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Backtracking over the words",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxLength(self, arr):\n        best = 0\n        def go(i, used, length):\n            nonlocal best\n            best = max(best, length)\n            for j in range(i, len(arr)):\n                w = arr[j]\n                if len(set(w)) == len(w) and not used & set(w):\n                    go(j + 1, used | set(w), length + len(w))\n        go(0, set(), 0)\n        return best",
   "time": "O(2ⁿ)",
   "space": "O(n)",
   "explain": "For each word either skip it or add it if its letters are all new.",
   "frames": [],
   "alt": true
  }
 ]
};
