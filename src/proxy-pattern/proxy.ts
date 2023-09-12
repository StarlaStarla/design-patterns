interface Database {
  getData(id: number): string
}

class RealDatabase implements Database {
  private data: { [id: number]: string } = {}

  public getData(id: number): string {
    console.log(`RealDatabase: Fetching data for ID ${id.toString()}`)
    return this.data[id]
  }

  public setData(id: number, value: string): void {
    console.log(`RealDatabase: Setting data for ID ${id.toString()}`)
    this.data[id] = value
  }
}

class DatabaseProxy implements Database {
  private realDatabase: RealDatabase
  private retrievedData: { [id: number]: string } = {}

  constructor() {
    this.realDatabase = new RealDatabase()
  }

  public getData(id: number): string {
    if (this.retrievedData[id] === undefined) {
      console.log(`DatabaseProxy: Caching data for ID ${id.toString()}`)
      this.retrievedData[id] = this.realDatabase.getData(id)
    }
    return this.retrievedData[id]
  }

  public setData(id: number, value: string): void {
    console.log(`DatabaseProxy: Setting data for ID ${id.toString()}`)
    this.realDatabase.setData(id, value)
    this.retrievedData[id] = value
  }
}

// Client code
const databaseProxy = new DatabaseProxy()

databaseProxy.setData(1, 'Hello World!')
console.log(databaseProxy.getData(1)) // Note: RealDatabase called here

databaseProxy.setData(2, 'Goodbye World!')
console.log(databaseProxy.getData(2)) // Note: RealDatabase called here

console.log(databaseProxy.getData(1)) // Note: No call to RealDatabase here
