window.PROBLEM = {
 "id": "3030",
 "title": "Find the Grid of Region Average",
 "level": "Medium",
 "topic": "Matrix",
 "question": "An image is a grid of pixel brightness values. A 'region' is a 3×3 block in which every two pixels that share a side differ by at most the threshold. Each pixel's new value is the average (rounded down) of the rounded-down averages of all regions it belongs to; a pixel in no region keeps its value. Return the new image. Example: [[5,6,7,10],[8,9,10,10],[11,12,13,10]], threshold 3 → every pixel becomes 9.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "For each pixel, list the regions on it",
   "tag": "Alternative",
   "code": "class Solution:\n    def resultGrid(self, image, threshold):\n        m, n = len(image), len(image[0])\n        def good(i, j):\n            for a in range(i, i + 3):\n                for b in range(j, j + 3):\n                    if b + 1 < j + 3 and abs(image[a][b] - image[a][b + 1]) > threshold: return False\n                    if a + 1 < i + 3 and abs(image[a][b] - image[a + 1][b]) > threshold: return False\n            return True\n        res = []\n        for x in range(m):\n            row = []\n            for y in range(n):\n                avgs = []\n                for i in range(x - 2, x + 1):\n                    for j in range(y - 2, y + 1):\n                        if 0 <= i <= m - 3 and 0 <= j <= n - 3 and good(i, j):\n                            avgs.append(sum(image[a][b] for a in range(i, i + 3) for b in range(j, j + 3)) // 9)\n                row.append(sum(avgs) // len(avgs) if avgs else image[x][y])\n            res.append(row)\n        return res",
   "time": "O(m·n·9·9)",
   "space": "O(1)",
   "explain": "For every pixel look at the (up to nine) 3×3 blocks that contain it and average the good ones.",
   "frames": [],
   "alt": true
  }
 ]
};
