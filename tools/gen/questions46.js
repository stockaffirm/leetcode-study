// Cisco: precise, layman-readable statements
module.exports={
3508:"Design a router that stores packets (source, destination, timestamp) with a memory limit. addPacket adds a packet (false if an identical one is already stored; if full, the oldest packet is dropped first), forwardPacket removes and returns the oldest packet as [source, destination, timestamp] (or [] if empty), getCount(destination, start, end) counts stored packets for that destination with timestamp in [start, end]. Example: Router(3) with the calls add(1,4,90), add(2,5,90), add(1,4,90), add(3,5,95), add(4,5,105), forward(), add(5,2,110), count(5,100,110) → true, true, false, true, true, [2,5,90], true, 1.",
2081:"A k-mirror number is a positive number without leading zeros that is a palindrome both in base 10 and in base k. Return the sum of the n smallest k-mirror numbers. Example: k=2, n=5 → 25 (1, 3, 5, 7, 9).",
2067:"Count the substrings of s in which every letter that appears occurs exactly `count` times. Example: 'aaabcbbcc', count=3 → 3.",
3047:"Several axis-aligned rectangles are given by bottom-left and top-right corners. Return the area of the largest square that fits inside the intersection of at least two of the rectangles, or 0. Example: [[1,1],[2,2],[3,1]] and [[3,3],[4,4],[6,6]] → 1.",
1784:"Return true if the binary string (which has no leading zeros) contains at most one contiguous segment of ones. Example: '1001' → false.",
3648:"A sensor on a cell covers all cells within Chebyshev distance k (max of the row and column differences). Return the minimum number of sensors needed to cover an n×m grid. Example: n=5, m=5, k=1 → 4.",
2016:"Return the largest nums[j] − nums[i] over pairs i<j with nums[i] < nums[j], or −1 if there is no such pair. Example: [7,1,5,4] → 4.",
486:"Two players alternately take a number from either end of nums; player 1 starts and the higher total wins (ties go to player 1). Assuming optimal play, return true if player 1 wins. Example: [1,5,2] → false.",
646:"A pair (c, d) can follow a pair (a, b) if b < c. Return the length of the longest chain you can form from some of the pairs. Example: [[1,2],[2,3],[3,4]] → 2.",
};
