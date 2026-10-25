window.PROBLEM = {
 "id": "609",
 "title": "Find Duplicate File in System",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Each string in paths describes a directory and the files in it: the directory path, then for each file its name with its content in brackets, e.g. 'root/a 1.txt(abcd) 2.txt(efgh)' means files root/a/1.txt (content abcd) and root/a/2.txt (content efgh). Return groups of the full paths of files that have IDENTICAL content (only groups with at least two files), in any order. Example: four directory lines → [['root/a/2.txt','root/c/d/4.txt','root/4.txt'], ['root/a/1.txt','root/c/3.txt']].",
 "why": "Each directory line lists files with their contents. Report groups of files that have identical content.",
 "idea": "Parse each line into directory + (name, content) pairs and put the full path in a dictionary keyed by content. Groups with two or more paths are duplicates.",
 "input": "4 directory lines with files containing abcd and efgh",
 "output": "two groups of duplicates",
 "notes": [],
 "best": "Parse each line into directory + (name, content) pairs and put the full path in a dictionary keyed by content. Groups with two or more paths are duplicates.",
 "variants": [
  {
   "name": "Group paths by file content",
   "code": "class Solution:\n    def findDuplicate(self, paths):\n        groups = defaultdict(list)\n        for p in paths:\n            root, *files = p.split(' ')\n            for f in files:\n                name, content = f.split('(')\n                groups[content[:-1]].append(root + '/' + name)\n        return [g for g in groups.values() if len(g) > 1]",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Parse each line into directory + (name, content) pairs and put the full path in a dictionary keyed by content. Groups with two or more paths are duplicates.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "setdefault grouping",
   "tag": "Alternative",
   "code": "class Solution:\n    def findDuplicate(self, paths):\n        groups = {}\n        for p in paths:\n            parts = p.split()\n            for f in parts[1:]:\n                i = f.index('(')\n                groups.setdefault(f[i + 1:-1], []).append(parts[0] + '/' + f[:i])\n        return [g for g in groups.values() if len(g) > 1]",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Same grouping with a plain dictionary and string slicing.",
   "frames": [],
   "alt": true
  }
 ]
};
