window.PROBLEM = {
 "id": "1166",
 "title": "Design File System",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a file system that can create paths such as '/a' or '/leet/code' and give each a number value. createPath(path, value) creates the path and returns true, but returns false if the path already exists OR its parent path does not exist (the parent of '/leet/code' is '/leet'). get(path) returns the stored value, or -1 if the path does not exist. Example: createPath('/a',1) → true; get('/a') → 1; createPath('/leet/code',2) → false (no '/leet' yet); createPath('/leet',1) → true; createPath('/leet/code',2) → true; get('/leet/code') → 2.",
 "why": "Create paths like '/a/b' with a value — only if the parent path already exists and the path is new. get(path) returns the value or −1.",
 "idea": "Store each full path in a dictionary. To create, check the path is new and its parent (everything before the last '/') is already stored.",
 "input": "createPath(/a,1), get(/a), createPath(/leet/code,2), createPath(/leet,1), createPath(/leet/code,2), get(/leet/code)",
 "output": "True, 1, False, True, True, 2",
 "notes": [],
 "best": "Store each full path in a dictionary. To create, check the path is new and its parent (everything before the last '/') is already stored.",
 "variants": [
  {
   "name": "Dictionary of full paths",
   "code": "class FileSystem:\n    def __init__(self):\n        self.paths = {'': -1}\n    def createPath(self, path, value):\n        parent = path[:path.rfind('/')]\n        if path in self.paths or parent not in self.paths: return False\n        self.paths[path] = value\n        return True\n    def get(self, path):\n        return self.paths.get(path, -1)",
   "time": "O(path length)",
   "space": "O(paths)",
   "explain": "Store each full path in a dictionary. To create, check the path is new and its parent (everything before the last '/') is already stored.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Tree of path parts",
   "tag": "Alternative",
   "code": "class FileSystem:\n    def __init__(self):\n        self.root = {'children': {}, 'value': -1}\n    def createPath(self, path, value):\n        parts = path.split('/')[1:]\n        node = self.root\n        for p in parts[:-1]:\n            if p not in node['children']: return False\n            node = node['children'][p]\n        if parts[-1] in node['children']: return False\n        node['children'][parts[-1]] = {'children': {}, 'value': value}\n        return True\n    def get(self, path):\n        node = self.root\n        for p in path.split('/')[1:]:\n            if p not in node['children']: return -1\n            node = node['children'][p]\n        return node['value']",
   "time": "O(path length)",
   "space": "O(paths)",
   "explain": "Each folder name is a node of a tree; walk down part by part.",
   "frames": [],
   "alt": true
  }
 ]
};
