window.PROBLEM = {
 "id": "2433",
 "title": "Find The Original Array of Prefix Xor",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "You are given pref where pref[i] = arr[0] ^ arr[1] ^ … ^ arr[i]. Recover arr.",
 "idea": "XOR undoes itself: pref[i] ^ pref[i−1] cancels everything except arr[i].",
 "input": "pref [5, 2, 0, 3, 1]",
 "output": "[5, 7, 2, 3, 2]",
 "notes": [],
 "best": "XOR undoes itself: pref[i] ^ pref[i−1] cancels everything except arr[i].",
 "variants": [
  {
   "name": "XOR neighbouring prefixes",
   "code": "class Solution:\n    def findArray(self, pref):\n        ans = [pref[0]]\n        for i in range(1, len(pref)):\n            ans.append(pref[i] ^ pref[i - 1])\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "XOR undoes itself: pref[i] ^ pref[i−1] cancels everything except arr[i].",
   "frames": []
  }
 ]
};
