window.PROBLEM = {
 "id": "2433",
 "title": "Find The Original Array of Prefix Xor",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "You are given a list pref. It was made from a hidden list arr like this: pref[i] = arr[0] XOR arr[1] XOR … XOR arr[i] (XOR combines two numbers bit by bit: a result bit is 1 when exactly one of the two bits is 1). Return the list arr (it is unique). Example: pref [5,2,0,3,1] → arr [5,7,2,3,2].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Undo in place from the back",
   "tag": "Alternative",
   "code": "class Solution:\n    def findArray(self, pref):\n        for i in range(len(pref) - 1, 0, -1):\n            pref[i] ^= pref[i - 1]\n        return pref",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Going from the end, XOR each entry with the one before it; no new list needed.",
   "frames": [],
   "alt": true
  }
 ]
};
