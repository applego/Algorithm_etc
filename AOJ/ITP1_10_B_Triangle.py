# -*- coding: utf-8 -*-
from sys import stdin
import math

A = list(map(float, stdin.readline().split()))
a, b, c = A[0], A[1], A[2]

h = b * math.sin(math.pi * c / 180)
S = a * h / 2
d = math.sqrt(math.pow((a - (b * math.cos(c * math.pi / 180))), 2)+ math.pow(h, 2))
L = a + b + d

print(format(S,'.8f'))
print(format(L, '.8f'))
print(format(h, '.8f'))

# ? question
    #TODO: TODO
    #!alert
    #//nana;sldkfjh
    #*aaaaaaaaaaaaa
