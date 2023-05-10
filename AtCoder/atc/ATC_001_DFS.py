# -*- coding: utf-8 -*-
# 提出用
import sys

def main(h,w,c):
  for i in range(h):
    for j in range(w):
      if c[i][j]=="s":
        sx,sy = i,j
      if c[i][j]=="g":
        gx,gy = i,j

  stack = [[sx,sy]]
  visited = [[0 for i in range(w)] for j in range(h)]
  visited[sx][sy]=1

  directions = [[0,-1],[1,0],[0,1],[-1,0]]

  while stack:
    print(stack)
    x,y = stack.pop()
    for i in range(len(directions)):
      nx,ny=x+directions[i][0],y+directions[i][1]
      if 0<= nx < h and 0 <= ny < w and visited[nx][ny] == 0 and c[nx][ny] != "#":
        visited[nx][ny]=1
        print(visited)
        stack.append([nx,ny])
        if nx == gx and ny == gy:
          print("Yes")
          return
  print("No")

h,w = map(int,input().split())
c = [list(input()) for i in range(h)]

main(h,w,c)

# test用　入力
ht,wt = map(int,'10 10'.split())
ct = []
ct.append('s.........')
ct.append('#########.')
ct.append('#.......#.')
ct.append('#..####.#.')
ct.append('##....#.#.')
ct.append('#####.#.#.')
ct.append('g.#.#.#.#.')
ct.append('#.#.#.#.#.')
ct.append('#.#.#.#.#.')
ct.append('#.....#...')

main(ht,wt,ct)

#その他
a = [[0 for i in range(3)] for j in range(5)]