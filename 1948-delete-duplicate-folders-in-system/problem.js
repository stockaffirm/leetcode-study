window.PROBLEM = {
 "id": "1948",
 "title": "Delete Duplicate Folders in System",
 "level": "Hard",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Two folders (with their whole contents) that look identical must all be deleted. Return the folders that remain.",
 "idea": "Build the folder tree. Give every non-empty folder a text 'signature' of its whole subtree. If a signature occurs more than once, every folder with it is duplicated and removed (along with everything inside).",
 "input": "[[a],[c],[d],[a,b],[c,b],[d,a]]",
 "output": "[[d],[d,a]]",
 "notes": [],
 "best": "Build the folder tree. Give every non-empty folder a text 'signature' of its whole subtree. If a signature occurs more than once, every folder with it is duplicated and removed (along with everything inside).",
 "variants": [
  {
   "name": "Folder tree + subtree signatures",
   "code": "class Solution:\n    def deleteDuplicateFolder(self, paths):\n        root = {}\n        for p in sorted(paths):\n            node = root\n            for name in p: node = node.setdefault(name, {})\n        count, sig = Counter(), {}\n        def encode(node):\n            if not node: return ''\n            s = ''.join('(' + k + encode(v) + ')' for k, v in sorted(node.items()))\n            sig[id(node)] = s\n            count[s] += 1\n            return s\n        encode(root)\n        ans = []\n        def collect(node, path):\n            for k, v in node.items():\n                if v and count[sig[id(v)]] > 1: continue\n                ans.append(path + [k])\n                collect(v, path + [k])\n        collect(root, [])\n        return ans",
   "time": "O(total path length · log)",
   "space": "O(total path length)",
   "explain": "Build the folder tree. Give every non-empty folder a text 'signature' of its whole subtree. If a signature occurs more than once, every folder with it is duplicated and removed (along with everything inside).",
   "frames": []
  }
 ]
};
