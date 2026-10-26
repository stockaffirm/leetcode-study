window.PROBLEM = {
 "id": "2353",
 "title": "Design a Food Rating System",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
