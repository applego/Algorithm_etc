# -*- coding: utf-8 -*-
from sys import stdin
import math

def is_prime_number(n):
  if n == 1:
    return False
  if n == 2:
    return True
  i = 2
  while i <= math.sqrt(n):
    if n % i == 0:
      return False
    i += 1
  else:
    return True
  # for i in range(2, math.sqrt(n)):
  #   if n % i == 0:
  #     return False
  # else:
  #   return True

#エラトステネスの篩
def make_is_prime(n):
  prime = [True] * (n + 1)
  if n >= 0: prime[0] = False
  if n >= 1: prime[1] = False
  for i in range(2, math.ceil(math.sqrt(n))):
    if not prime[i]: continue
    for j in range(int(i * i), n + 1, i):
      prime[j] = False
  return prime

import time
t1 = time.time()
n = int(stdin.readline().rstrip())
cnt = 0
for i in range(n):
  v = int(stdin.readline().rstrip())
  if is_prime_number(v):
    cnt += 1
else:
  print(cnt)
t2 = time.time()
print("time{}".format(t2 - t1))


t3 = time.time()
n = int(stdin.readline().rstrip())
nums = list([int(stdin.readline().rstrip()) for i in range(n)])
prime = make_is_prime(max(nums))
cnt = 0
for v in nums:
  # v = int(stdin.readline().rstrip())
  if prime[v]:
    cnt += 1
print(cnt)
t4 = time.time()
print("time{}".format(t4 - t3))


#* 先程の単純なアルゴリズムは無駄な計算をしています。𝑛 が素数でない場合（約数を持つ場合）、約数として2 から ⌊𝑛√⌋ までの数を少なくとも１つ持っているはずです。逆に言えば、それが存在しなければ素数です。
