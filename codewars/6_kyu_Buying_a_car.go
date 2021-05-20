package kata

import "math"

func NbMonths(startPriceOld, startPriceNew, savingperMonth int, percentLossByMonth float64) [2]int {
	// var currentAmountOfSaving int
	// var currentPriceOld float64

	// var currentPriceNew float64
	// var currentPercentLossByMonth float64
	currentAmountOfSaving := float64(0)
	currentPriceOld := float64(startPriceOld)

	currentPriceNew := float64(startPriceNew)
	currentPercentLossByMonth := percentLossByMonth
	const interval = 2
	const upRate = 0.5

	// 最初
	month := 0
	for {
		if canBuyNewCar(currentAmountOfSaving, currentPriceOld, currentPriceNew) {
			available := int(math.Round( (currentAmountOfSaving + currentPriceOld) - currentPriceNew))
			ret := [2]int {month,available}
			return ret
		}
		month++
		// 逐次的凝集? percentLoss　がupdatePriceの入力になっている
		updatePercentLoss(&currentPercentLossByMonth,month,interval,upRate)
		updatePrice(&currentPriceOld,currentPercentLossByMonth)
		updatePrice(&currentPriceNew,currentPercentLossByMonth)

		currentAmountOfSaving += float64(savingperMonth)
	}
	// xヶ月後
		//資産を取得（貯金＋車を売ったお金）
		// 車の値段を取得
		// 資産>=車の値段だったらxと車を買った後の資産（貯金額）を返す（intの配列で）
}

func canBuyNewCar(mountOfSaving,currentPriceOld,currentPriceNew float64) bool {
	return mountOfSaving + currentPriceOld >= currentPriceNew
	// if mountOfSaving + currentPriceOld >= currentPriceNew {
	// 	return
	// }
}

func updatePercentLoss(currentPercentLossByMonth *float64 ,month,interval int,upRate float64) {
	if month % interval == 0 {
		*currentPercentLossByMonth += upRate
	}
}

func updatePrice(currentPrice *float64,percentLossByMonth float64) {
	*currentPrice = *currentPrice * (100 - percentLossByMonth) / 100
}

// interface 車か椅子か家かを意識したくない（使う側から）

// A Tour of Goやるわ
// interfaceの有効活用も勉強しないと

type Price struct {
	startPrice int
	percentLossByMonth float64
	monthsIncreasePercentLoss int
	percentIncreasePercentLoss	float64
}

type IPriceManager interface {
	GetCurrentPercentLoss(month int) float64
}

// func (priceManager CarPriceManager) GetCurrentPercentLoss(month int) float64 {
// 	for{}
// }

// type Car

type CarPrice struct {

}

/*
- test code
dotest_20210520(2000, 8000, 1000, 1.5, [2]int{6, 766})

- parameter
parameter (positive int or float, guaranteed) startPriceOld (Old car price)
parameter (positive int or float, guaranteed) startPriceNew (New car price)
parameter (positive int or float, guaranteed) savingperMonth
parameter (positive float or int, guaranteed) percentLossByMonth

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)

- example
end month 1: percentLoss 1.5 available -4910.0
end month 2: percentLoss 2.0 available -3791.7999...
end month 3: percentLoss 2.0 available -2675.964
end month 4: percentLoss 2.5 available -1534.06489...
end month 5: percentLoss 2.5 available -395.71327...
end month 6: percentLoss 3.0 available 766.158120825...
return [6, 766] or (6, 766)

値段管理者
	値下がり率
	２ヶ月で値下がり率をどれだけ上げるか

	ｘヶ月後月末の値段(元値,何ヶ月後) : 値段



車の値段
  元値	コンストラクタで
　 値下がり率（月）
	値下がり率の上昇（２ヶ月でどれだけ）

	xヶ月末の値段を返す関数

貯金額
	元
	毎月の貯金額

	買う関数（値段）


*/
