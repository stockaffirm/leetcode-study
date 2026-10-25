window.PROBLEM = {
 "id": "2115",
 "title": "Find All Possible Recipes from Given Supplies",
 "level": "Medium",
 "topic": "Graph",
 "question": "You are given recipes (names), ingredients[i] (the list of things recipe i needs) and supplies (things you have in unlimited amount). An ingredient can be a supply or another recipe you can make. Return all the recipes you can make, in any order. Example: recipe 'bread' needs 'yeast' and 'flour', supplies yeast, flour, corn → ['bread']. If recipes need each other in a circle they cannot be made.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def findAllRecipes(self, recipes, ingredients, supplies):\n        have = set(supplies)\n        req = dict(zip(recipes, ingredients))\n        state = {}\n        def can(x):\n            if x in have: return True\n            if x not in req: return False\n            if x in state: return state[x] == 2\n            state[x] = 1\n            ok = all(can(y) for y in req[x])\n            state[x] = 2 if ok else 0\n            return ok\n        return [r for r in recipes if can(r)]",
   "time": "O(V + E)",
   "space": "O(V)",
   "explain": "Can recipe X be made? Yes if every ingredient is a supply or a makeable recipe; cycles count as no.",
   "frames": [],
   "alt": true
  }
 ]
};
