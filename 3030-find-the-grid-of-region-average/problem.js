window.PROBLEM = {
 "id": "3030",
 "title": "Find the Grid of Region Average",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "A grayscale image. A 'region' is a 3×3 block in which every two neighbouring pixels differ by at most the threshold. Each pixel becomes the average of the (rounded-down) averages of all regions it belongs to, or stays unchanged if it is in none.",
 "idea": "Test every 3×3 block's neighbour differences; for good blocks add the block average (floor of sum/9) to the nine pixels' totals and counts. Finally divide totals by counts.",
 "input": "[[5,6,7,10],[8,9,10,10],[11,12,13,10]], threshold 3",
 "output": "all 9s",
 "notes": [],
 "best": "Test every 3×3 block's neighbour differences; for good blocks add the block average (floor of sum/9) to the nine pixels' totals and counts. Finally divide totals by counts.",
 "variants": [
  {
   "name": "Check every 3×3 block and spread its average",
   "code": "class Solution:\n    def resultGrid(self, image, threshold):\n        m, n = len(image), len(image[0])\n        total = [[0] * n for _ in range(m)]\n        cnt = [[0] * n for _ in range(m)]\n        for i in range(m - 2):\n            for j in range(n - 2):\n                ok = all(abs(image[a][b] - image[a][b + 1]) <= threshold for a in range(i, i + 3) for b in range(j, j + 2))\n                ok = ok and all(abs(image[a][b] - image[a + 1][b]) <= threshold for a in range(i, i + 2) for b in range(j, j + 3))\n                if ok:\n                    avg = sum(image[a][b] for a in range(i, i + 3) for b in range(j, j + 3)) // 9\n                    for a in range(i, i + 3):\n                        for b in range(j, j + 3):\n                            total[a][b] += avg\n                            cnt[a][b] += 1\n        return [[total[i][j] // cnt[i][j] if cnt[i][j] else image[i][j] for j in range(n)] for i in range(m)]",
   "time": "O(m·n·9)",
   "space": "O(m·n)",
   "explain": "Test every 3×3 block's neighbour differences; for good blocks add the block average (floor of sum/9) to the nine pixels' totals and counts. Finally divide totals by counts.",
   "frames": []
  }
 ]
};
