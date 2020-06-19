
"""

"""

# -*- coding: utf-8 -*-
from sys import stdin
import math

fmt = "%.8f %.8f"
cos60 = math.cos(math.radians(60))
sin60 = math.sin(math.radians(60))

def koch(d,p1,p2):
    #線分(p1,p2)のp1,p2をセット→引数で（nだけでは座標を特定できない）
    #線分を三等分する２点s,tを頂点とした正三角形(s,u,t)を作成
    #線分p1,s s,u u,t t,p2に対して再帰的に繰り返す

    if d == 0:
        return
    sx = (2 * p1[0] + 1 * p2[0]) / 3
    sy = (2 * p1[1] + 1 * p2[1]) / 3
    tx = (1 * p1[0] + 2 * p2[0]) / 3
    ty = (1 * p1[1] + 2 * p2[1]) / 3

    dx = tx - sx
    dy = ty - sy

    ux = dx * cos60 - dy * sin60 + sx
    uy = dx * sin60 + dy * cos60 + sy

    koch(d - 1, p1, (sx, sy))
    print(fmt % (sx, sy))
    koch(d - 1, (sx, sy), (ux, uy))
    print(fmt % (ux, uy))
    koch(d - 1, (ux, uy), (tx, ty))
    print(fmt % (tx, ty))
    koch(d - 1, (tx, ty), p2)


n = int(stdin.readline().rstrip())

a_p1_x = a_p1_y = 0
a_p2_x = 100
a_p2_y = 0

print(fmt % (a_p1_x, a_p1_y))
koch(n, (a_p1_x, a_p1_y), (a_p2_x, a_p2_y))
print(fmt % (a_p2_x, a_p2_y))
