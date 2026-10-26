window.PROBLEM = {
 "id": "588",
 "title": "Design In-Memory File System",
 "level": "Hard",
 "topic": "Design",
 "question": "Design an in-memory file system. ls(path): if the path is a folder, return the names of the files and folders inside it in alphabetical order; if it is a file, return just that file's name. mkdir(path): create a folder (and any missing parent folders). addContentToFile(filePath, content): create the file if needed and APPEND the text to it. readContentFromFile(filePath): return the file's text. Example: ls('/') → []; mkdir('/a/b/c'); addContentToFile('/a/b/c/d','hello'); ls('/') → ['a']; read('/a/b/c/d') → 'hello'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Flat dictionary of paths",
   "tag": "Alternative",
   "code": "class FileSystem:\n    def __init__(self):\n        self.dirs = {'/'}\n        self.files = {}\n    def _parent_dirs(self, path):\n        parts = [p for p in path.split('/') if p]\n        for i in range(1, len(parts)):\n            self.dirs.add('/' + '/'.join(parts[:i]))\n    def ls(self, path):\n        if path in self.files: return [path.split('/')[-1]]\n        prefix = path.rstrip('/') + '/'\n        names = set()\n        for p in list(self.dirs) + list(self.files):\n            if p != path and p.startswith(prefix):\n                names.add(p[len(prefix):].split('/')[0])\n        return sorted(names)\n    def mkdir(self, path):\n        self._parent_dirs(path)\n        self.dirs.add(path)\n    def addContentToFile(self, filePath, content):\n        self._parent_dirs(filePath)\n        self.files[filePath] = self.files.get(filePath, '') + content\n    def readContentFromFile(self, filePath):\n        return self.files[filePath]",
   "time": "O(total paths)",
   "space": "O(total size)",
   "explain": "Remember every folder and file by its full path and list a folder by scanning paths with that prefix.",
   "frames": [],
   "alt": true
  }
 ]
};
