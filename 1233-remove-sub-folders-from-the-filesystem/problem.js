window.PROBLEM = {
 "id": "1233",
 "title": "Remove Sub-Folders from the Filesystem",
 "level": "Medium",
 "topic": "Array / String",
 "question": "You are given a list of folder paths such as '/a/b'. A folder is a SUB-FOLDER of another if it lies inside it (like '/a/b' inside '/a'). Remove every folder that is a sub-folder of another folder in the list and return the rest, in any order. Careful: '/a/b/ca' is NOT inside '/a/b/c'. Example: ['/a','/a/b','/c/d','/c/d/e','/c/f'] → ['/a','/c/d','/c/f'].",
 "why": "Remove every folder that sits inside another listed folder. '/a' and '/a/b' → keep only '/a'.",
 "idea": "Sorted alphabetically, a folder's sub-folders come right after it. Keep a folder unless it starts with the last kept folder followed by '/' (so '/a/b/ca' is not inside '/a/b/c').",
 "input": "[\"/a\",\"/a/b\",\"/c/d\",\"/c/d/e\",\"/c/f\"]",
 "output": "[\"/a\",\"/c/d\",\"/c/f\"]",
 "notes": [],
 "best": "Sorted alphabetically, a folder's sub-folders come right after it. Keep a folder unless it starts with the last kept folder followed by '/' (so '/a/b/ca' is not inside '/a/b/c').",
 "variants": [
  {
   "name": "Sort, then compare with the last kept folder",
   "code": "class Solution:\n    def removeSubfolders(self, folder):\n        folder.sort()\n        ans = []\n        for f in folder:\n            if not ans or not f.startswith(ans[-1] + '/'): ans.append(f)\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sorted alphabetically, a folder's sub-folders come right after it. Keep a folder unless it starts with the last kept folder followed by '/' (so '/a/b/ca' is not inside '/a/b/c').",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every parent in a set",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeSubfolders(self, folder):\n        s = set(folder)\n        ans = []\n        for f in folder:\n            parts = f.split('/')\n            ok = True\n            for i in range(2, len(parts)):\n                if '/'.join(parts[:i]) in s:\n                    ok = False\n                    break\n            if ok: ans.append(f)\n        return ans",
   "time": "O(total length)",
   "space": "O(n)",
   "explain": "Put all folders in a set; a folder is removed if any of its parent paths is in the set.",
   "frames": [],
   "alt": true
  }
 ]
};
