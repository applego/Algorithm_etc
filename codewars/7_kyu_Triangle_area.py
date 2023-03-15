def t_area(t_str):
    arr = t_str.splitlines()

    h = len(arr) -2
    print(f"h:{h}")
    w = (len(arr[len(arr) - 1]) - 1) / 2
    print(f"w:{w}")
    return (h * w) / 2


from TestCodewar import Test
test = Test()

# test.assert_equals(t_area('\n.\n. .\n'), .5)

test.assert_equals(t_area('\n.\n. .\n. . .\n. . . .\n. . . . .\n'),8.0)

test.assert_equals(t_area('\n.\n. .\n. . .\n'), 2.0)

test.assert_equals(t_area('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), 32.0)
