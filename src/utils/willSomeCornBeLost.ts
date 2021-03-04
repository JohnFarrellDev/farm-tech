
// TODO: not yet handling decimal inputs
export const willSomeCornBeLost = (numberOfBagsOfCorn: number, numberOfGeese: number) => {
    if (numberOfGeese === 0) {
      return false;
    }
    else {
      if (numberOfBagsOfCorn > 2) {
        return true;
      }
  
      if (numberOfBagsOfCorn > 0 && numberOfGeese > 1) {
        return true;
      }

      return false;
    }
  }