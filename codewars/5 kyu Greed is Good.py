"""
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
"""
import collections

def score(dice):
    score = 0
    counter = collections.Counter(dice)
    for key, cnt in counter.items():
        q, mod = divmod(cnt, 3)
        if key == 1:
            score += key * 1000 * q + key * 100 * mod
        elif key == 5:
            score += key * 100 * q + key * 10 * mod
        else:
            score += key * 100 * q
    return score

print( score( [2, 3, 4, 6, 2] ))#, 0)
print( score(  [4, 4, 4, 3, 3] ))#, 400)
print(score([2, 4, 4, 5, 4]))  #, 450)

def score2(dice):
  sum = 0
  counter = [0,0,0,0,0,0]
  points = [1000, 200, 300, 400, 500, 600]
  extra = [100,0,0,0,50,0]
  for die in dice:
    counter[die-1] += 1

  for (i, count) in enumerate(counter):
    sum += (points[i] if count >= 3 else 0) + extra[i] * (count%3)

  return sum