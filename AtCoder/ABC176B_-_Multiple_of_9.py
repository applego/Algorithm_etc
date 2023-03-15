"""
整数
N
 が
9
 の倍数であることと、
N
 を十進法で表したときの各桁の数の和が
9
 の倍数であることは同値です。

N
 が
9
 の倍数であるか判定してください。

"""
# -*- coding: utf-8 -*-

import time
input_val = input()

#1
start = time.time()

a = list(map(int, input_val))
sum_val = sum(a)
if sum_val % 9 == 0:
    print("Yes")
else:
    print("No")

elapsed_time = time.time() - start
print("elapsed_time:{0}".format(elapsed_time) + "[sec]")

start = time.time()
if int(input_val) % 9 == 0:
    print("Yes")
else:
    print("No")

elapsed_time = time.time() - start
print("elapsed_time:{0}".format(elapsed_time) + "[sec]")
