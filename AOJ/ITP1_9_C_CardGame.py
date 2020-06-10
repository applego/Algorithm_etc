# -*- coding: utf-8 -*-
from sys import stdin


# 3
# cat dog
# fish fish
# lion tiger

n = int(stdin.readline().rstrip())
p_taro = 0
p_hanako = 0

for i in range(n):
  cardsput = stdin.readline().rstrip().split()
  if (cardsput[0] == cardsput[1]):
    p_taro += 1
    p_hanako += 1
  elif (cardsput[0] < cardsput[1]):
    p_hanako += 3
  else:
    p_taro += 3

else:
  print("{0} {1}".format(p_taro, p_hanako))

# ? question
    #TODO: TODO
    #!alert
    #//nana;sldkfjh
    #*aaaaaaaaaaaaa
