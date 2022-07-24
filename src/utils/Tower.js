import Stack from "./Stack";

class Tower {
  constructor() {
    this.disks = new Stack();
  }

  add(value) {
    this.disks.push(value);
    return this;
  }

  moveTopTo(destinationTower) {
    if (
      destinationTower.disks.top === null ||
      this.disks.top.value < destinationTower.disks.top.value
    ) {
      destinationTower.disks.push(this.disks.top.value);
      this.disks.pop();
      return true;
    }
  }

  moveDisks(disks, destinationTower, auxiliaryTower) {
    if (disks === 0) {
      return true;
    }
    if (disks === 1) {
      this.moveTopTo(destinationTower);
    }
    if (disks >= 2) {
      this.moveDisks(disks - 1, auxiliaryTower, destinationTower);
      this.moveTopTo(destinationTower);
      auxiliaryTower.moveDisks(disks - 1, destinationTower, this);
    }
    return true;
  }
}

export default Tower;
