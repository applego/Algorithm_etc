# -*- coding: utf-8 -*-
from sys import stdin
import ITP1_11_Dice

dice_list = list(map(int, stdin.readline().rstrip().split()))
dice = ITP1_11_Dice.Dice(dice_list)

rolls = stdin.readline().rstrip()
for roll in rolls:
    dice.roll(roll)
else:
    print(dice.getTop())
