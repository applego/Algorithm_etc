package ginkgo_study

type Grade struct {
	Subject string
	Score int
	Mandatory bool
}

func (g *Grade) IsPass()bool{
	if g.Score > 60{
		return true
	}
	return false
}
