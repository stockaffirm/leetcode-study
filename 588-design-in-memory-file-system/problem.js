window.PROBLEM = {
 "id": "588",
 "title": "Design In-Memory File System",
 "level": "Hard",
 "topic": "Design",
 "question": "",
 "why": "Build a tiny file system: list a folder, make folders, write to a file (appending) and read it back.",
 "idea": "Represent a folder as a dictionary of names → (folder dictionary or file text). Every operation just walks the path one name at a time.",
 "input": "ls('/'), mkdir('/a/b/c'), addContentToFile('/a/b/c/d','hello'), ls('/'), read('/a/b/c/d')",
 "output": "[], ['a'], 'hello'",
 "notes": [],
 "best": "Represent a folder as a dictionary of names → (folder dictionary or file text). Every operation just walks the path one name at a time.",
 "variants": [
  {
   "name": "Nested dictionaries as folders",
   "code": "class FileSystem:\n    def __init__(self):\n        self.root = {}\n    def _walk(self, path, create=False):\n        node = self.root\n        for part in [p for p in path.split('/') if p]:\n            if part not in node:\n                if not create: return None\n                node[part] = {}\n            node = node[part]\n        return node\n    def ls(self, path):\n        node = self._walk(path)\n        if isinstance(node, str): return [path.split('/')[-1]]\n        return sorted(node.keys())\n    def mkdir(self, path):\n        self._walk(path, True)\n    def addContentToFile(self, filePath, content):\n        parts = [p for p in filePath.split('/') if p]\n        node = self.root\n        for p in parts[:-1]: node = node.setdefault(p, {})\n        node[parts[-1]] = node.get(parts[-1], '') + content\n    def readContentFromFile(self, filePath):\n        parts = [p for p in filePath.split('/') if p]\n        node = self.root\n        for p in parts[:-1]: node = node[p]\n        return node[parts[-1]]",
   "time": "O(path length)",
   "space": "O(total size)",
   "explain": "Represent a folder as a dictionary of names → (folder dictionary or file text). Every operation just walks the path one name at a time.",
   "frames": []
  }
 ]
};
