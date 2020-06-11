class Dice:

    def __init__(self,dicelist):
        self.dice_list = dicelist

    def roll(self, direction):
        work = list(self.dice_list)
        if (direction == 'N'):
            self.dice_list[0] = work[1]
            self.dice_list[1] = work[5]
            self.dice_list[2] = work[2]
            self.dice_list[3] = work[3]
            self.dice_list[4] = work[0]
            self.dice_list[5] = work[4]
        elif (direction == 'E'):
            self.dice_list[0] = work[3]
            self.dice_list[1] = work[1]
            self.dice_list[2] = work[0]
            self.dice_list[3] = work[5]
            self.dice_list[4] = work[4]
            self.dice_list[5] = work[2]
        elif (direction == 'S'):
            self.dice_list[0] = work[4]
            self.dice_list[1] = work[0]
            self.dice_list[2] = work[2]
            self.dice_list[3] = work[3]
            self.dice_list[4] = work[5]
            self.dice_list[5] = work[1]
        elif (direction == 'W'):
            self.dice_list[0] = work[2]
            self.dice_list[1] = work[1]
            self.dice_list[2] = work[5]
            self.dice_list[3] = work[0]
            self.dice_list[4] = work[4]
            self.dice_list[5] = work[3]

    def getTop(self):
        return self.dice_list[0]
