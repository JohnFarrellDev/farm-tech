
// TODO: not yet handling decimal inputs
export const willSomeCornBeLost = (numberOfBagsOfCorn: number, numberOfGeese: number) => {
    if (numberOfGeese > 0) {
      if (numberOfBagsOfCorn > 1) {
        return true;
      }
  
      if (numberOfBagsOfCorn == 1 && numberOfGeese > 1) {
        return true;
      }
    }
  
    return false;
  }