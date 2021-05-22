/* eslint-disable generator-star-spacing */

export class Team {
  *[Symbol.iterator]() {
    let index = 0;
    const personsTeam = Object.values(this);
    while (personsTeam[index]) {
      yield personsTeam[index++];
    }
  }
}
