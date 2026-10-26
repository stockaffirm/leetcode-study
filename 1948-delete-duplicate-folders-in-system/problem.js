window.PROBLEM = {
 "id": "1948",
 "title": "Delete Duplicate Folders in System",
 "level": "Hard",
 "topic": "Hash Map / Set",
 "question": "A file system is described by a list of folder paths: each path is a list of folder names from the top, e.g. ['a','b'] means folder b inside folder a. Two different folders are identical if they contain exactly the same set of subfolders with the same structure (an empty folder never counts as identical to another). Delete ALL folders that have an identical twin somewhere, together with everything inside them, then return the remaining folder paths in any order. Example: a and c both contain just a folder b, so both are deleted; d (containing a) stays → [['d'], ['d','a']].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Signatures as tuples",
   "tag": "Alternative",
   "code": "class Solution:\n    def deleteDuplicateFolder(self, paths):\n        root = {}\n        for p in paths:\n            node = root\n            for name in p: node = node.setdefault(name, {})\n        seen = defaultdict(list)\n        def sig(node):\n            return tuple((k, sig(v)) for k, v in sorted(node.items()))\n        def walk(node):\n            for k, v in node.items():\n                if v: seen[sig(v)].append((node, k))\n                walk(v)\n        walk(root)\n        for locs in seen.values():\n            if len(locs) > 1:\n                for parent, k in locs: parent.pop(k, None)\n        ans = []\n        def collect(node, path):\n            for k, v in node.items():\n                ans.append(path + [k])\n                collect(v, path + [k])\n        collect(root, [])\n        return ans",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Group folders by an exact nested-tuple signature of their contents, delete every group of two or more, then list what is left.",
   "frames": [],
   "alt": true
  }
 ]
};
