export class GeneticAlgorithm {
  generate(length: number) {
    // TODO: Implement the generate method
    let chromosome = new Array<number>();
    for (let j = 0; j < length; j++){
      chromosome.push(Math.floor(Math.random() * 2));
    }
    return chromosome.join('');
  }

  select(population: string[], fitnesses: number[]) {
    // TODO: Implement the select method
    const fitnessSum = fitnesses.reduce((acc, next) => acc + next);
    let randomFitness = Math.random() * fitnessSum;
    for (let i = 0; i < population.length; i++){
      randomFitness -= fitnesses[i];
      if (randomFitness < 0) {
        return population[i];
      }
    }
    return population[population.length - 1];
  }

  mutate(chromosome: string, p: number) {
    // TODO: Implement the mutate method
    let chromoArray = chromosome.split('');
    for (let i = 0; i < chromosome.length; i++) {
      if (Math.random() < p) {
        chromoArray[i] = (chromoArray[i] === "1") ? "0" : "1";
      }
    }
    return chromoArray.join('');
  }

  crossover(chromosome1: string, chromosome2: string) {
    // TODO: Implement the crossover method
    const index = Math.floor(Math.random() * chromosome1.length);
    let crossedChhrome1 = chromosome1.substring(0, index) + chromosome2.slice(index);
    let crossedChhrome2 = chromosome2.substring(0, index) + chromosome1.slice(index);
    return [crossedChhrome1, crossedChhrome2];
  }

  run(fitness: (chromosome: string) => number, length: number, p_c: number, p_m: number, iterations = 100) {
    // TODO: Implement the run method
    let chromosomes: string[] = new Array<string>();
    let fitnesses: number[] = new Array<number>();
    const numOfChromosomes = 100;
    for (let i = 0; i < numOfChromosomes; i++){
      let chromo = this.generate(length);
      chromosomes.push(this.generate(length));
      fitnesses.push(fitness(chromo));
    }

    for (let i = 0; i < iterations; i++){
      let newPopulation: string[] = new Array<string>();
      let newFitnesses: number[] = new Array<number>();
      while (newPopulation.length !== chromosomes.length) {
        let randomChromo1 = this.select(chromosomes, fitnesses);
        let randomChromo2 = this.select(chromosomes, fitnesses);
        let crossedChromos = [randomChromo1, randomChromo2];
        if (Math.random() < p_c) {
          crossedChromos = this.crossover(randomChromo1, randomChromo2);
        }
        crossedChromos[0] = this.mutate(crossedChromos[0], p_m);
        crossedChromos[1] = this.mutate(crossedChromos[1], p_m);
        newPopulation.push(crossedChromos[0]);
        newFitnesses.push(fitness(crossedChromos[0]));
        newPopulation.push(crossedChromos[1]);
        newFitnesses.push(fitness(crossedChromos[1]));
      }
      chromosomes = newPopulation;
      fitnesses = newFitnesses;
    }
    for (let i = 0; i < fitnesses.length; i++){
      if (fitnesses[i] === 1) {
        return chromosomes[i];
      }
    }
  }
}
