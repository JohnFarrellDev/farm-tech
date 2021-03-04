
// TODO: not yet handling decimal inputs
export const willSomeCornBeLost = makePairEvaluator('bag', 'goose');

function makePairEvaluator(nonEaterName: string, eaterName: string) {
  
  return function (numberOfNonEaters: number, numberOfEaters: number) {
    if (numberOfEaters === 0) {
      return {losingSome: false, extraTrips: 0, instructions: ''};
    }
    else {

      if (numberOfNonEaters === 1 && numberOfEaters === 1) {
        return {losingSome: false, extraTrips: 0, instructions: `Take the ${eaterName} across first.`};
      }

      if (numberOfNonEaters === 2 && numberOfEaters === 1) {
        return {losingSome: false, extraTrips: 1, instructions: `Take the ${eaterName} across first, then the first ${nonEaterName}, then take the ${eaterName} BACK and leave it on the near bank while you take the second ${nonEaterName}, then go back for the ${eaterName}.`};
      }

      if (numberOfNonEaters === 1 && numberOfEaters === 2) {
        return {losingSome: false, extraTrips: 1, instructions: `Take the ${nonEaterName} across first, then the first ${eaterName}, then take the ${nonEaterName} BACK and leave it on the near bank while you take the second ${eaterName}, then go back for the ${nonEaterName}.`};
      }
      
      if (numberOfNonEaters > 2) {
        return {losingSome: true, extraTrips: 0, instructions: ''};
      }

      if (numberOfNonEaters > 0 && numberOfEaters > 1) {
        return {losingSome: true, extraTrips: 0, instructions: ''};
      }

      return {losingSome: false, extraTrips: 0, instructions: ''};
    }
  };
}