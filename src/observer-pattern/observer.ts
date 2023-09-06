interface Observer {
  update(status: string): void
}

class Subject {
  observers: Observer[] = []

  public addObserver(observer: Observer): void {
    this.observers.push(observer)
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  public notify(status: string): void {
    for (let observer of this.observers) {
      observer.update(status)
    }
  }
}

class ConcreteSubject extends Subject {
  status: string | undefined

  public setStatus(status: string): void {
    this.status = status
    this.notify(status)
  }
}

class ConcreteObserver implements Observer {
  name: string

  constructor(name: string) {
    this.name = name
  }

  public update(status: string): void {
    console.log(`${this.name} received update: ${status}`)
  }
}

const subject = new ConcreteSubject()
const observer1 = new ConcreteObserver('Observer 1')
const observer2 = new ConcreteObserver('Observer 2')

subject.addObserver(observer1)
subject.addObserver(observer2)

subject.setStatus('New message!')
subject.setStatus('Another message!')

subject.removeObserver(observer1)

subject.setStatus('Final message!')
