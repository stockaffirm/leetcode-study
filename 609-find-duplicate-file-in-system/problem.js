window.PROBLEM = {
 "id": "609",
 "title": "Find Duplicate File in System",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
