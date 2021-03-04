
// TODO: not yet handling decimal inputs
export const willSomeCornBeLost = makePairEvaluator('bag', 'goose');

export const willSomeGeeseBeLost = makePairEvaluator('goose', 'fox');

export function willSomeCornOrGeeseBeLost(numberOfBags: number, numberOfGeese: number, numberofFoxes: number) {
  if (numberofFoxes === 0) {
    return willSomeCornBeLost(numberOfBags, numberOfGeese);
  }

  if (numberOfBags === 0) {
    return willSomeGeeseBeLost(numberOfGeese, numberofFoxes);
  }

  if (numberOfGeese === 0) {
    return {losingSome: false, extraTrips: 0, instructions: []};  
  }

  if (numberOfBags === 1 && numberOfGeese === 1 && numberofFoxes === 1) {
    return {losingSome: false, extraTrips: 1, instructions: ['Take the goose across', 'Take the fox across', 'Bring the goose BACK', 'Take the corn across', 'Go back and get the goose']};
  }

  return {losingSome: true, extraTrips: 0, instructions: []};
}

function makePairEvaluator(nonEaterName: string, eaterName: string) {
  
  return function (numberOfNonEaters: number, numberOfEaters: number) {
    if (numberOfEaters === 0) {
      return {losingSome: false, extraTrips: 0, instructions: []};
    }
    else {

      if (numberOfNonEaters === 1 && numberOfEaters === 1) {
        return {losingSome: false, extraTrips: 0, instructions: []};
      }

      if (numberOfNonEaters === 2 && numberOfEaters === 1) {
        return {losingSome: false, extraTrips: 1, instructions: [`Take the ${eaterName} across`, `Take the first ${nonEaterName} across`, `Take the ${eaterName} BACK and leave it on the near bank while you take the second ${nonEaterName} across`, `Then go back for the ${eaterName} and take it across`]};
      }

      if (numberOfNonEaters === 1 && numberOfEaters === 2) {
        return {losingSome: false, extraTrips: 1, instructions: [`Take the ${nonEaterName} across`, `Take the first ${eaterName} across`, `Take the ${nonEaterName} BACK and leave it on the near bank while you take the second ${eaterName} across`, `Then go back for the ${nonEaterName} and take it across`]};
      }
      
      if (numberOfNonEaters > 2) {
        return {losingSome: true, extraTrips: 0, instructions: []};
      }

      if (numberOfNonEaters > 0 && numberOfEaters > 1) {
        return {losingSome: true, extraTrips: 0, instructions: []};
      }

      return {losingSome: false, extraTrips: 0, instructions: []};
    }
  };
}