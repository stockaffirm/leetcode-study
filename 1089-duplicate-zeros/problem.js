window.PROBLEM = {
 "id": "1089",
 "title": "Duplicate Zeros",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "Duplicate each zero in the array (shifting the rest right) and drop the elements that no longer fit, modifying the array in place. Example: [1,0,2,3,0,4,5,0] → [1,0,0,2,3,0,0,4].",
 "why": "[1,0,2,3,0,4,5,0] → [1,0,0,2,3,0,0,4].",
 "idea": "Count how many zeros will be duplicated so we know how far elements shift. Walk from the end writing each element to its final position (and a second 0 for zeros), skipping writes beyond the array.",
 "input": "arr = [1,0,2,3,0,4,5,0]",
 "output": "[1, 0, 0, 2, 3, 0, 0, 4]",
 "notes": [],
 "best": "Count how many zeros will be duplicated so we know how far elements shift. Walk from the end writing each element to its final position (and a second 0 for zeros), skipping writes beyond the array.",
 "variants": [
  {
   "name": "Count the zeros, fill from the back",
   "code": "class Solution:\n    def duplicateZeros(self, arr):\n        n = len(arr)\n        zeros = arr.count(0)\n        i = n - 1\n        j = n + zeros - 1\n        while i >= 0 and j >= 0:\n            if j < n:\n                arr[j] = arr[i]\n            if arr[i] == 0:\n                j -= 1\n                if j < n:\n                    arr[j] = 0\n            i -= 1\n            j -= 1\n        return arr",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count how many zeros will be duplicated so we know how far elements shift. Walk from the end writing each element to its final position (and a second 0 for zeros), skipping writes beyond the array.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Build a new list then copy",
   "tag": "Alternative",
   "code": "class Solution:\n    def duplicateZeros(self, arr):\n        out = []\n        for x in arr:\n            out.append(x)\n            if x == 0:\n                out.append(0)\n        arr[:] = out[:len(arr)]\n        return arr",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Construct the expanded list and cut it to the array length.",
   "frames": [],
   "alt": true
  }
 ]
};
