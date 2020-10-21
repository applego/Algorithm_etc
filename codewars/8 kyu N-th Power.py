def pow_k(x, n):
    """
    O(log n)
    """
    if n == 0:
        return 1

    K = 1
    while n > 1:
        if n % 2 != 0:
            K *= x
        x *= x
        n //= 2

    return K * x

def index(array, n):
    try:
        return pow_k(array[n],n)
    except:
        return -1

from TestCodewar import Test
test = Test()

test.assert_equals(index([1, 2, 3, 4],2),9)
test.assert_equals(index([1, 3, 10, 100],3),1000000)
