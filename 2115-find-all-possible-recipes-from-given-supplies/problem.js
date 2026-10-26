window.PROBLEM = {
 "id": "2115",
 "title": "Find All Possible Recipes from Given Supplies",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Recipes need ingredients, which may be supplies or other recipes. Which recipes can be made?",
 "idea": "Treat 'ingredient → recipe' as edges. Start with the supplies; each time a recipe has all its ingredients available it becomes available too (like Kahn's algorithm).",
 "input": "recipe bread needs yeast, flour; supplies yeast, flour, corn",
 "output": "[\"bread\"]",
 "notes": [],
 "best": "Treat 'ingredient → recipe' as edges. Start with the supplies; each time a recipe has all its ingredients available it becomes available too (like Kahn's algorithm).",
 "variants": [
  {
   "name": "Topological sort from the supplies",
   "code": "class Solution:\n    def findAllRecipes(self, recipes, ingredients, supplies):\n        users = defaultdict(list)\n        indeg = {}\n        for r, ing in zip(recipes, ingredients):\n            ing = set(ing)\n            indeg[r] = len(ing)\n            for x in ing: users[x].append(r)\n        q = deque(supplies)\n        out = []\n        while q:\n            x = q.popleft()\n            for r in users[x]:\n                indeg[r] -= 1\n                if indeg[r] == 0:\n                    out.append(r)\n                    q.append(r)\n        return out",
   "time": "O(V + E)",
   "space": "O(V + E)",
   "explain": "Treat 'ingredient → recipe' as edges. Start with the supplies; each time a recipe has all its ingredients available it becomes available too (like Kahn's algorithm).",
   "frames": []
  }
 ]
};
