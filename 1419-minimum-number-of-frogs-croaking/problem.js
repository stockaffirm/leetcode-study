window.PROBLEM = {
 "id": "1419",
 "title": "Minimum Number of Frogs Croaking",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
