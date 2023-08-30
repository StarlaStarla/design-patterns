type dimension = {
  height: number
  width: number
  depth: number
}

class TableFactory {
  _tablesMap = new Map()
  constructor() {
    this._tablesMap.set('BigTable', new BigTable())
    this._tablesMap.set('MediumTable', new MediumTable())
    this._tablesMap.set('SmallTable', new SmallTable())
  }
  getTable(table: string): Table {
    if (this._tablesMap.has(table)) {
      return this._tablesMap.get(table)
    } else {
      throw new Error('Wrong table type')
    }
  }
}

abstract class Table {
  height = 0
  width = 0
  depth = 0

  abstract getTotalTables(): number

  getDimensions(): dimension {
    return {
      width: this.width,
      depth: this.depth,
      height: this.height
    }
  }
}

class SmallTable extends Table {
  constructor() {
    super()
    this.height = 40
    this.width = 40
    this.depth = 40
  }
  getTotalTables() {
    return 100
  }
}

class MediumTable extends Table {
  constructor() {
    super()
    this.height = 60
    this.width = 60
    this.depth = 60
  }
  getTotalTables() {
    return 101
  }
}

class BigTable extends Table {
  constructor() {
    super()
    this.height = 80
    this.width = 80
    this.depth = 80
  }
  getTotalTables() {
    return 102
  }
}

const tableFactory = new TableFactory()
const table = tableFactory.getTable('SmallTable')
console.log(table.getDimensions())
console.log(table.getTotalTables())
