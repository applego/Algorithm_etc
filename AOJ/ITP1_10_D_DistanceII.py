# -*- coding: utf-8 -*-
from sys import stdin
import math

n = int(stdin.readline().rstrip())
lx = list(map(int, stdin.readline().split()))
ly = list(map(int, stdin.readline().split()))

s1=s2=s3=max_x_y = 0
for i in range(n):
    x_y = abs(lx[i] - ly[i])
    #p=1
    s1+=x_y
    #p=2
    s2 += math.pow(x_y,2)
    #p=3
    s3 += math.pow(x_y, 3)
    #p=∞
    if max_x_y < x_y:
        max_x_y = x_y
else:
    #p=1
    print("{0:.8f}".format(s1))
    #p=2
    d2 = math.sqrt(s2)
    print("{0:.8f}".format(d2))
    #p=3
    d3 = math.pow(s3, 1.0 / 3.0)
    print("{0:.8f}".format(d3))
    #p=∞
    print(max_x_y)

# ? question
    #TODO: TODO
    #!alert
    #//nana;sldkfjh
    #*aaaaaaaaaaaaa
