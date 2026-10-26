window.PROBLEM = {
 "id": "1166",
 "title": "Design File System",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
