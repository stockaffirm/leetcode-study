window.PROBLEM = {
 "id": "1419",
 "title": "Minimum Number of Frogs Croaking",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Several frogs croak 'croak' and their sounds are mixed in the string. A frog must finish a croak before starting another. Return the minimum number of frogs needed, or −1 if the string cannot be a mix of valid croaks. Example: 'crcoakroak' → 2.",
 "why": "'crcoakroak' mixes two frogs: one at 'c','o','a','k' while another starts → 2 frogs.",
 "idea": "Keep a count of frogs currently at each letter of 'croak'. A letter 'c' starts a frog (or reuses a finished one); any other letter moves a frog from the previous stage to this one — if none is waiting there the string is invalid. A 'k' finishes a frog. The answer is the maximum number of frogs croaking at the same time, or −1 if the string is invalid or some frog is left unfinished.",
 "input": "croakOfFrogs = \"crcoakroak\"",
 "output": "2",
 "notes": [],
 "best": "Keep a count of frogs currently at each letter of 'croak'. A letter 'c' starts a frog (or reuses a finished one); any other letter moves a frog from the previous stage to this one — if none is waiting there the string is invalid. A 'k' finishes a frog. The answer is the maximum number of frogs croaking at the same time, or −1 if the string is invalid or some frog is left unfinished.",
 "variants": [
  {
   "name": "Count frogs at each stage of 'croak'",
   "code": "class Solution:\n    def minNumberOfFrogs(self, croakOfFrogs):\n        stage = {c: i for i, c in enumerate(\"croak\")}\n        cnt = [0] * 5\n        active = best = 0\n        for ch in croakOfFrogs:\n            i = stage[ch]\n            if i == 0:\n                cnt[0] += 1\n                active += 1\n                best = max(best, active)\n            else:\n                if cnt[i - 1] == 0:\n                    return -1\n                cnt[i - 1] -= 1\n                if i == 4:\n                    active -= 1\n                else:\n                    cnt[i] += 1\n        return best if active == 0 else -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep a count of frogs currently at each letter of 'croak'. A letter 'c' starts a frog (or reuses a finished one); any other letter moves a frog from the previous stage to this one — if none is waiting there the string is invalid. A 'k' finishes a frog. The answer is the maximum number of frogs croaking at the same time, or −1 if the string is invalid or some frog is left unfinished.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count letters in a running balance",
   "tag": "Alternative",
   "code": "class Solution:\n    def minNumberOfFrogs(self, croakOfFrogs):\n        c = r = o = a = k = 0\n        best = 0\n        for ch in croakOfFrogs:\n            if ch == 'c':\n                c += 1\n            elif ch == 'r':\n                r += 1\n            elif ch == 'o':\n                o += 1\n            elif ch == 'a':\n                a += 1\n            else:\n                k += 1\n            if not (c >= r >= o >= a >= k):\n                return -1\n            best = max(best, c - k)\n        return best if c == r == o == a == k else -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The counts c ≥ r ≥ o ≥ a ≥ k must hold after every letter; the peak of c − k is the number of frogs.",
   "frames": [],
   "alt": true
  }
 ]
};
