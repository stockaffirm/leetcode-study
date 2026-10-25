window.PROBLEM = {
 "id": "2353",
 "title": "Design a Food Rating System",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a FoodRatings system. It is created with lists foods[i], cuisines[i] and ratings[i]. changeRating(food, newRating) updates a food's rating. highestRated(cuisine) returns the name of the food with the highest rating in that cuisine; if two foods tie, return the one that comes first alphabetically. Example: kimchi (korean, 9), miso (japanese, 12), sushi (japanese, 8), moussaka (greek, 15), ramen (japanese, 14), bulgogi (korean, 7): highestRated('korean') → 'kimchi'; highestRated('japanese') → 'ramen'; changeRating('sushi',16); highestRated('japanese') → 'sushi'; changeRating('ramen',16); highestRated('japanese') → 'ramen' (tie, alphabetical).",
 "why": "Foods belong to cuisines and have ratings that can change. Ask for the highest-rated food of a cuisine (ties: alphabetically smaller name).",
 "idea": "Keep each food's current rating in a dictionary and a max-heap per cuisine of (−rating, name). When a rating changes push a new entry; when reading the top, drop entries whose rating is out of date.",
 "input": "6 foods; highestRated(korean), highestRated(japanese), changeRating(sushi,16), …",
 "output": "kimchi, ramen, sushi, ramen",
 "notes": [],
 "best": "Keep each food's current rating in a dictionary and a max-heap per cuisine of (−rating, name). When a rating changes push a new entry; when reading the top, drop entries whose rating is out of date.",
 "variants": [
  {
   "name": "Heap per cuisine with lazy deletion",
   "code": "class FoodRatings:\n    def __init__(self, foods, cuisines, ratings):\n        self.rating = dict(zip(foods, ratings))\n        self.cuisine = dict(zip(foods, cuisines))\n        self.heaps = defaultdict(list)\n        for f, c, r in zip(foods, cuisines, ratings): heappush(self.heaps[c], (-r, f))\n    def changeRating(self, food, newRating):\n        self.rating[food] = newRating\n        heappush(self.heaps[self.cuisine[food]], (-newRating, food))\n    def highestRated(self, cuisine):\n        h = self.heaps[cuisine]\n        while -h[0][0] != self.rating[h[0][1]]: heappop(h)\n        return h[0][1]",
   "time": "O(log n)",
   "space": "O(n)",
   "explain": "Keep each food's current rating in a dictionary and a max-heap per cuisine of (−rating, name). When a rating changes push a new entry; when reading the top, drop entries whose rating is out of date.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan the cuisine's foods",
   "tag": "Brute force",
   "code": "class FoodRatings:\n    def __init__(self, foods, cuisines, ratings):\n        self.rating = dict(zip(foods, ratings))\n        self.cuisine = dict(zip(foods, cuisines))\n        self.by = defaultdict(set)\n        for f, c in zip(foods, cuisines): self.by[c].add(f)\n    def changeRating(self, food, newRating):\n        self.rating[food] = newRating\n    def highestRated(self, cuisine):\n        return min(self.by[cuisine], key=lambda f: (-self.rating[f], f))",
   "time": "O(n) per query",
   "space": "O(n)",
   "explain": "Keep the foods of each cuisine in a set and take the best on demand.",
   "frames": [],
   "alt": true
  }
 ]
};
