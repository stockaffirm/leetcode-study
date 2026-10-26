window.PROBLEM = {
 "id": "2007",
 "title": "Find Original Array From Doubled Array",
 "level": "Medium",
 "topic": "Sorting",
 "question": "changed is supposed to be an array that was doubled: every original value x and also 2x were put in and shuffled. Return the original array (any order) or an empty array if changed is not a doubled array. Example: [1,3,4,2,6,8] → [1,3,4].",
 "why": "[1,3,4,2,6,8] = original [1,3,4] plus doubles [2,6,8] → [1,3,4].",
 "idea": "The array holds each original value x and also 2x. Sort and count. For the smallest remaining value x it must be an original, so consume one x and one 2x; if there is no 2x left the array is not doubled.",
 "input": "changed = [1,3,4,2,6,8]",
 "output": "[1, 3, 4]",
 "notes": [],
 "best": "The array holds each original value x and also 2x. Sort and count. For the smallest remaining value x it must be an original, so consume one x and one 2x; if there is no 2x left the array is not doubled.",
 "variants": [
  {
   "name": "Match smallest with its double",
   "code": "class Solution:\n    def findOriginalArray(self, changed):\n        if len(changed) % 2:\n            return []\n        cnt = Counter(changed)\n        res = []\n        for x in sorted(cnt):\n            if cnt[x] == 0:\n                continue\n            if x == 0:\n                if cnt[0] % 2:\n                    return []\n                res += [0] * (cnt[0] // 2)\n                cnt[0] = 0\n                continue\n            if cnt[2 * x] < cnt[x]:\n                return []\n            res += [x] * cnt[x]\n            cnt[2 * x] -= cnt[x]\n            cnt[x] = 0\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The array holds each original value x and also 2x. Sort and count. For the smallest remaining value x it must be an original, so consume one x and one 2x; if there is no 2x left the array is not doubled.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Greedy with a pointer over sorted values",
   "tag": "Alternative",
   "code": "class Solution:\n    def findOriginalArray(self, changed):\n        if len(changed) % 2:\n            return []\n        need = Counter()\n        res = []\n        for x in sorted(changed):\n            if need[x] > 0:\n                need[x] -= 1\n            else:\n                res.append(x)\n                need[2 * x] += 1\n        return res if not +need else []",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Process values from smallest; each unused value claims its double.",
   "frames": [],
   "alt": true
  }
 ]
};
