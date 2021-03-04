
// TODO: not yet handling decimal inputs
export const willSomeCornBeLost = (numberOfBagsOfCorn: number, numberOfGeese: number) => {
    if (numberOfGeese === 0) {
      return {losingCorn: false, extraTrips: 0, instructions: ''};
    }
    else {
      if (numberOfBagsOfCorn > 2) {
        return {losingCorn: true, extraTrips: 0, instructions: ''};
      }
  
      if (numberOfBagsOfCorn > 0 && numberOfGeese > 1) {
        return {losingCorn: true, extraTrips: 0, instructions: ''};
      }
  
      if (numberOfBagsOfCorn === 1 && numberOfGeese === 1) {
        return {losingCorn: false, extraTrips: 0, instructions: 'Take the goose across first.'};
      }
  
      if (numberOfBagsOfCorn === 2 && numberOfGeese === 1) {
        return {losingCorn: false, extraTrips: 1, instructions: 'Take the goose across first, then the first bag, then take the goose BACK and leave it on the near bank while you take the second bag, then go back for the goose.'};
      }

      return {losingCorn: false, extraTrips: 0, instructions: ''};
    }
  }