window.PROBLEM = {
 "id": "1868",
 "title": "Product of Two Run-Length Encoded Arrays",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "[1,1,1,2,2,2] × [6,6,6,3,3,3] = [6,6,6,6,6,6] → one run [6,6].",
 "idea": "Walk both run lists with two pointers. Take the shorter remaining run length, multiply the two values, and add that many copies to the result (merging with the last run if the product is equal). Then advance whichever run was used up.",
 "input": "encoded1 = [[1,3],[2,3]], encoded2 = [[6,3],[3,3]]",
 "output": "[[6,6]]",
 "notes": [],
 "best": "Walk both run lists with two pointers. Take the shorter remaining run length, multiply the two values, and add that many copies to the result (merging with the last run if the product is equal). Then advance whichever run was used up.",
 "variants": [
  {
   "name": "Two pointers over the runs",
   "code": "class Solution:\n    def findRLEArray(self, encoded1, encoded2):\n        res = []\n        i = j = 0\n        f1, f2 = encoded1[0][1], encoded2[0][1]\n        while i < len(encoded1) and j < len(encoded2):\n            take = min(f1, f2)\n            prod = encoded1[i][0] * encoded2[j][0]\n            if res and res[-1][0] == prod:\n                res[-1][1] += take\n            else:\n                res.append([prod, take])\n            f1 -= take\n            f2 -= take\n            if f1 == 0:\n                i += 1\n                if i < len(encoded1):\n                    f1 = encoded1[i][1]\n            if f2 == 0:\n                j += 1\n                if j < len(encoded2):\n                    f2 = encoded2[j][1]\n        return res",
   "time": "O(m+n)",
   "space": "O(1)",
   "explain": "Walk both run lists with two pointers. Take the shorter remaining run length, multiply the two values, and add that many copies to the result (merging with the last run if the product is equal). Then advance whichever run was used up.",
   "frames": []
  }
 ]
};
