
NEWFILENAME="7 kyu Factorial"
touch "codewars/$NEWFILENAME.ts"


NEWFILENAME2="abc002B - 罠"
touch "AtCoder/$NEWFILENAME2.ts"

NEWFILENAME3="ALDS1_4_D_割当"
touch "AOJ/$NEWFILENAME3.ts"


// Go codewars
cd codewars
ginkgo generate "7 kyu Complementary DNA_test"
ginkgo generate "8 kyu Surface Area and Volume of a Box_test"

// not work
NEWFILENAME4="8 kyu Surface Area and Volume of a Boxt"
echo "$NEWFILENAME4_test"
ginkgo generate "$NEWFILENAME4_test"

touch "codewars/$NEWFILENAME4.go"
