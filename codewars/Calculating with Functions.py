import math

def zero(*yonsoku_num2):  #your code here
    if is_empty(yonsoku_num2):
        return 0
    else:
        return calc(0, yonsoku_num2)

def one(*yonsoku_num2): #your code here
    if is_empty(yonsoku_num2):
        return 1
    else:
        return calc(1, yonsoku_num2)

def two(*yonsoku_num2):  #your code here
    if is_empty(yonsoku_num2):
        return 2
    else:
        return calc(2, yonsoku_num2)

def three(*yonsoku_num2):  #your code here
    if is_empty(yonsoku_num2):
        return 3
    else:
        return calc(3, yonsoku_num2)

def four(*yonsoku_num2):  #your code here
    if is_empty(yonsoku_num2):
        return 4
    else:
        return calc(4, yonsoku_num2)

def five(*yonsoku_num2):  #your code here
    if is_empty(yonsoku_num2):
        return 5
    else:
        return calc(5, yonsoku_num2)

def six(*yonsoku_num2):  #your code here
    if is_empty(yonsoku_num2):
        return 6
    else:
        return calc(6, yonsoku_num2)

def seven(*yonsoku_num2):  #your code here
    if is_empty(yonsoku_num2):
        return 7
    else:
        return calc(7, yonsoku_num2)

def eight(*yonsoku_num2):  #your code here
    if is_empty(yonsoku_num2):
        return 8
    else:
        return calc(8, yonsoku_num2)

def nine(*yonsoku_num2):  #your code here
    if is_empty(yonsoku_num2):
        return 9
    else:
        return calc(9, yonsoku_num2)


def plus(arg):  #your code here
    return ['+', arg]
def minus(arg):  #your code here
    return ['-', arg]
def times(arg):  #your code here
    return ['*', arg]
def divided_by(arg):  #your code here
    return ['/', arg]

def is_empty(arg):
    return len(arg) == 0
def calc(num1, yonsoku_num2):
    yonsoku = yonsoku_num2[0][0]
    num2 = yonsoku_num2[0][1]
    if yonsoku == "+":
        return num1 + num2
    elif yonsoku == "-":
        return num1 - num2
    elif yonsoku == "*":
        return num1 * num2
    else:
        tmp = num1 / num2
        return math.floor(tmp)


if __name__ == '__main__':
    print(four(plus(nine())))
    print(seven(times(five())))
    print(eight(minus(three())))
    print(six(divided_by(two())))



# Test.describe('Basic Tests')
# print(four(plus(nine())), 13)
# print(seven(times(five())), 35)
# print(eight(minus(three())), 5)
# print(six(divided_by(two())), 3)
