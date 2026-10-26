window.PROBLEM = {
 "id": "1233",
 "title": "Remove Sub-Folders from the Filesystem",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
