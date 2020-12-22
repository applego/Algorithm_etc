"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneticAlgorithm = void 0;
var GeneticAlgorithm = /** @class */ (function () {
    function GeneticAlgorithm() {
    }
    GeneticAlgorithm.prototype.generate = function (length) {
        // TODO: Implement the generate method
        var chromosome = new Array();
        for (var j = 0; j < length; j++) {
            chromosome.push(Math.floor(Math.random() * 2));
        }
        return chromosome.join('');
    };
    GeneticAlgorithm.prototype.select = function (population, fitnesses) {
        // TODO: Implement the select method
        var fitnessSum = fitnesses.reduce(function (acc, next) { return acc + next; });
        var randomFitness = Math.random() * fitnessSum;
        for (var i = 0; i < population.length; i++) {
            randomFitness -= fitnesses[i];
            if (randomFitness < 0) {
                return population[i];
            }
        }
        return population[population.length - 1];
    };
    GeneticAlgorithm.prototype.mutate = function (chromosome, p) {
        // TODO: Implement the mutate method
        var chromoArray = chromosome.split('');
        for (var i = 0; i < chromosome.length; i++) {
            if (Math.random() < p) {
                chromoArray[i] = (chromoArray[i] === "1") ? "0" : "1";
            }
        }
        return chromoArray.join('');
    };
    GeneticAlgorithm.prototype.crossover = function (chromosome1, chromosome2) {
        // TODO: Implement the crossover method
        var index = Math.floor(Math.random() * chromosome1.length);
        var crossedChhrome1 = chromosome1.substring(0, index) + chromosome2.slice(index);
        var crossedChhrome2 = chromosome2.substring(0, index) + chromosome1.slice(index);
        return [crossedChhrome1, crossedChhrome2];
    };
    GeneticAlgorithm.prototype.run = function (fitness, length, p_c, p_m, iterations) {
        if (iterations === void 0) { iterations = 100; }
        // TODO: Implement the run method
        var chromosomes = new Array();
        var fitnesses = new Array();
        var numOfChromosomes = 100;
        for (var i = 0; i < numOfChromosomes; i++) {
            var chromo = this.generate(length);
            chromosomes.push(this.generate(length));
            fitnesses.push(fitness(chromo));
        }
        for (var i = 0; i < iterations; i++) {
            var newPopulation = new Array();
            var newFitnesses = new Array();
            while (newPopulation.length !== chromosomes.length) {
                var randomChromo1 = this.select(chromosomes, fitnesses);
                var randomChromo2 = this.select(chromosomes, fitnesses);
                var crossedChromos = [randomChromo1, randomChromo2];
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
        for (var i = 0; i < fitnesses.length; i++) {
            if (fitnesses[i] === 1) {
                return chromosomes[i];
            }
        }
    };
    return GeneticAlgorithm;
}());
exports.GeneticAlgorithm = GeneticAlgorithm;
//# sourceMappingURL=5 kyu Binary Genetic Algorithms.js.map